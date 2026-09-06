import { mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const sources = [
  { name: 'free-email-domains', repository: 'Kikobeats/free-email-domains', branch: 'master', file: 'domains.json', license: 'LICENSE.md' },
  { name: 'disposable-email-domains', repository: 'disposable-email-domains/disposable-email-domains', branch: 'main', file: 'disposable_email_blocklist.conf', license: 'LICENSE.txt' },
];
const domains = new Set();
const records = [];
for (const source of sources) {
  const base = `https://raw.githubusercontent.com/${source.repository}/${source.branch}/`;
  const response = await fetch(base + source.file);
  if (!response.ok) throw new Error(`${source.name}: ${response.status}`);
  const body = await response.text();
  const list = source.file.endsWith('.json') ? JSON.parse(body) : body.split(/\r?\n/);
  if (!Array.isArray(list) || list.length < 100) throw new Error('Invalid domain list');
  for (const item of list) {
    if (typeof item !== 'string') throw new Error('Invalid domain');
    const domain = item.trim().toLowerCase();
    if (domain && !domain.startsWith('#') && /^[a-z0-9.-]+$/.test(domain)) domains.add(domain);
  }
  const licenseResponse = await fetch(base + source.license);
  if (!licenseResponse.ok) throw new Error(`License unavailable for ${source.name}`);
  const license = await licenseResponse.text();
  await mkdir('licenses', { recursive: true });
  await writeFile(`licenses/${source.name}.txt`, license);
  records.push({ source: base + source.file, retrieved: new Date().toISOString(), sha256: createHash('sha256').update(body).digest('hex') });
}
await writeFile('src/lib/email-domain-blocklist.json', JSON.stringify([...domains].sort()) + '\n');
await writeFile('licenses/email-domain-provenance.json', JSON.stringify(records, null, 2) + '\n');
console.log(`Updated ${domains.size} domains; no email addresses sent to external services.`);
