const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const forbidden = /\b(?:internal (?:only|note|use|review)|human review pending|reviewer pending|pilot dataset|working (?:dataset|evidence|draft)|publication gate|publication_approved|human_review|charts? coming (?:next|soon)|not (?:yet )?ready (?:for|to)|placeholder (?:data|chart|content)|TODO|TBD|lorem ipsum|before it belongs in a client deliverable|as an AI|prompt instructions|do not publish|awaiting (?:approval|review)|unapproved scope)\b/i;
const paths = /(?:[A-Z]:\\Users\\|\/Users\/|\.\.\/research\/|SMR_BUSINESS_BRIEF|SMR_RESEARCH_STANDARD|build_protein_bars_workbook)/i;
const failures = [];
function check(text, location) { if (forbidden.test(text) || paths.test(text)) failures.push(`${location}: ${text.slice(0,180)}`); }
function walk(directory) {
  for (const item of fs.readdirSync(directory, {withFileTypes:true})) {
    const file = path.join(directory,item.name);
    if(item.isDirectory()) { walk(file); continue; }
    if(!/\.(tsx?|json)$/.test(file)) continue;
    const content=fs.readFileSync(file,'utf8');
    if (/<form(?:\s|>)/.test(content) && path.relative(root, file).replaceAll('\\', '/') !== 'src/components/ContactForm.tsx') failures.push(`Unprotected form: ${file}. Use the shared protected inquiry form.`);
    if(file.endsWith('.json')) { check(content,file); continue; }
    const tree=ts.createSourceFile(file,content,ts.ScriptTarget.Latest,true);
    function visit(node) {
      if(ts.isStringLiteral(node)||ts.isNoSubstitutionTemplateLiteral(node)||ts.isJsxText(node)||ts.isTemplateHead(node)||ts.isTemplateMiddle(node)||ts.isTemplateTail(node)) check(node.text,file);
      ts.forEachChild(node,visit);
    }
    visit(tree);
  }
}
walk(path.join(root,'src'));
function publicFiles(directory) { for(const item of fs.readdirSync(directory,{withFileTypes:true})) { const file=path.join(directory,item.name); if(item.isDirectory()) publicFiles(file); else if(/(?:internal|draft|working|research-standard|evidence-plan|verification|qa-result)/i.test(item.name)) failures.push(`Private artifact in public directory: ${file}`); } }
publicFiles(path.join(root,'public'));
// The exhibit payload is intentionally separate from operational research records.
const data=JSON.parse(fs.readFileSync(path.join(root,'src/lib/protein-bars.json'),'utf8'));
const fields={root:['date','edition','products','pairs'],product:['id','brand','name','line','formulation','weight','protein','sugar','packPrice','source','nutritionSource'],pair:['id','productId','bars','direct','retail','retailer','source']};
function keys(record,allowed) { for(const key of Object.keys(record)) if(!allowed.includes(key)) failures.push(`Unexpected public evidence field: ${key}`); }
keys(data,fields.root); data.products.forEach(p=>keys(p,fields.product)); data.pairs.forEach(p=>keys(p,fields.pair));
if(process.argv.includes('--built')) {
  let count=0;
  function built(directory) {
    for(const item of fs.readdirSync(directory,{withFileTypes:true})) {
      const file=path.join(directory,item.name);
      if(item.isDirectory()) built(file);
      else if(/\.(html|rsc)$/.test(file)) {check(fs.readFileSync(file,'utf8'),file);count++;}
    }
  }
  built(path.join(root,process.env.SMR_PUBLICATION_PREVIEW === '1' ? '.next-publication/server/app' : '.next/server/app'));
  if(!count) failures.push('No production pages found for client copy check.');
  console.log(`Production copy check: ${count} HTML and RSC files scanned.`);
}
if(process.argv.includes('--self-test')) {
  for(const phrase of ['Human review pending','Pilot dataset','Charts coming next','Internal note','TODO']) if(!forbidden.test(phrase)) throw Error(`Detector missed ${phrase}`);
  for(const phrase of ['Prices exclude tax and delivery','Selected products, not a market-wide ranking','Open email draft','Scenario assumptions']) if(forbidden.test(phrase)) throw Error(`False positive: ${phrase}`);
}
if(failures.length) { console.error(failures.join('\n')); process.exitCode=1; }
else console.log('Client copy check: no prohibited production language, private paths or unexpected evidence fields.');
module.exports = { forbidden, paths };
