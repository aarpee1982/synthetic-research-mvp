export type Source = { title: string; url: string; locator: string };
export type Segment = { name: string; definition: string; lever: string };
export type Scenario = { name: 'Conservative' | 'Neutral' | 'Optimistic'; volume: number; price: number; laterVolume: number; laterPrice: number; rationale: string };
export type Peer = { name: string; specialist: boolean; professional: boolean | 'both'; evidence: string; source: number };
export type Dossier = {
  slug: string; title: string; strapline: string; scope: string;
  segments: Segment[]; channels: Segment[]; segmentInsight: string;
  priceTitle: string; priceInsight: string; prices: { name: string; value: number }[];
  scenarioIntro: string; scenarios: Scenario[];
  peerFamily: string; peers: Peer[]; peerInsight: string;
  trade: string; contents: { title: string; anchor: string }[];
  sources: Source[]; related: string[];
};

const bls: Source = { title: 'BLS: July 2026 Consumer Price Index', url: 'https://www.bls.gov/news.release/archives/cpi_08122026.htm', locator: 'Table 2; US city average; July 2025-July 2026, unadjusted percentage change. Released 12 August 2026.' };
const fda: Source = { title: 'FDA: Food label claims', url: 'https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/label-claims-conventional-foods-and-dietary-supplements', locator: 'Conventional foods: nutrient-content, health and structure/function claims. Accessed 6 September 2026.' };
const flowers: Source = { title: 'Flowers Foods: FY2025 annual report', url: 'https://investors.flowersfoods.com/~/media/Files/F/Flowers-Foods-V3/documents/Annual%20Report/flowers-foods-2025-annual-report.pdf', locator: 'Business; sales discussion, p.35. FY2025 includes 53 weeks. Company operations only.' };
const aryzta: Source = { title: 'ARYZTA: Portfolio and channels', url: 'https://www.aryzta.com/company/portfolio', locator: 'Bake-off categories; retail, QSR and other foodservice channels. Accessed 6 September 2026.' };
const campbell: Source = { title: "Campbell's: 2026 corporate report", url: 'https://www.thecampbellscompany.com/wp-content/uploads/2026/04/The-Campbells-Company-2026-Corporate-Responsibility-Report.pdf', locator: 'Company overview, p.6: Snacks and Meals & Beverages portfolios.' };
const lotus: Source = { title: 'Lotus Bakeries: 2025 annual report', url: 'https://www.lotusbakeries.com/sites/default/files/documents-en/2025_Annual_Report_Lotus_Bakeries_Group_1.pdf', locator: 'Section 4.2, p.299: Biscoff, Natural Foods and Local Heroes. Company-owned brand mix, not market share.' };
const hts: Source = { title: 'USITC: 2026 tariff schedule', url: 'https://www.usitc.gov/harmonized_tariff_information/hts/archive/list', locator: '2026 editions and revisions; classification must match the shipment date and product specification.' };
const generalMills: Source = { title: 'General Mills: FY2025 results', url: 'https://investors.generalmills.com/press-releases/press-release-details/2025/General-Mills-Reports-Fiscal-2025-Fourth-quarter-and-Full-year-Results-and-Provides-Fiscal-2026-Outlook/default.aspx', locator: 'Company business and segment results; North America Retail and North America Foodservice.' };
const post: Source = { title: 'Post Holdings: 2025 annual report', url: 'https://www.postholdings.com/wp-content/uploads/2025/12/Post-Holdings-2025-Annual-Report-FINAL.pdf', locator: 'Business: Products; Sales, Marketing and Distribution; Post Consumer Brands, Weetabix and Foodservice.' };
const bobs: Source = { title: "Bob's Red Mill: Foodservice", url: 'https://www.bobsredmill.com/food-service', locator: 'Ingredient and bulk product catalogue for professional operators. Accessed 6 September 2026.' };
const smucker: Source = { title: 'J.M. Smucker: FY2025 results', url: 'https://investors.jmsmucker.com/news/news-details/2025/The-J-M--Smucker-Co--Announces-Fiscal-Year-2025-Fourth-Quarter-Results/default.aspx', locator: 'Sweet Baked Snacks and company portfolio. Q4 figures are not full-year figures.' };

export const dossierEdition = '6 September 2026';
export const forecastMethod = 'SMR conditional revenue model v1.0. 2026 = 100 is a normalised starting point, not a measured market size. Revenue compounds unit volume and realised price/mix separately. Assumptions change after 2028. The shaded envelope varies annual price/mix by one percentage point either side; it is a sensitivity range, not a confidence interval. No probability is assigned to the scenarios.';

export const dossiers: Record<string, Dossier> = {
  'protein-bars': {
    slug: 'protein-bars', title: 'Protein Bars', strapline: 'Protein per dollar matters more than price per pack.',
    scope: 'US product economics and conditional demand outlook. Seven selected products; prices and labels observed 5 September 2026.',
    segments: [
      { name: 'Milk-based', definition: 'Milk protein and whey-led recipes, represented by Quest.', lever: 'Protein density and texture' },
      { name: 'Milk + collagen', definition: 'Blended animal-protein recipes, represented by Barebells.', lever: 'Taste and protein composition' },
      { name: 'Plant-based', definition: 'Plant-protein recipes, represented by ALOHA.', lever: 'Dietary positioning and repeat use' },
      { name: 'Mixed animal proteins', definition: 'Milk with collagen, egg or gelatin, represented by David.', lever: 'Protein delivery per calorie' },
    ],
    channels: [
      { name: 'Brand direct', definition: 'One-time pack price before delivery and tax.', lever: 'Acquisition cost and repeat orders' },
      { name: 'Mass retail', definition: 'Matched Target packs in the observed comparison.', lever: 'Shelf price and retailer economics' },
      { name: 'Multipacks', definition: 'Compare identical flavour, count and serving weight.', lever: 'Basket size versus cost per bar' },
      { name: 'Subscription', definition: 'Separate recurring offers from one-time transactions.', lever: 'Retention and net realised price' },
    ],
    segmentInsight: 'Protein bars compete on formulation and the cost of delivering labelled protein, not pack price alone. In this selection, ALOHA supplies 14 g per bar and David Gold 28 g; this is a product comparison, not a health ranking or a sales-weighted market average. A plant-based proposition therefore needs its own value story rather than a direct gram-for-gram promise.[2][3]',
    priceTitle: 'Normalising the pack changes the comparison', prices: [],
    priceInsight: 'Channel choice can outweigh a small formulation premium. The matched Quest 12-pack was about 17% less expensive at Target than on the brand website. Compare identical packs before setting a direct-to-consumer offer. Listed prices exclude delivery, tax and subscription discounts; retailer prices are location- and date-sensitive.[1][4]',
    scenarioIntro: 'Our neutral planning case pairs modest unit growth with restrained price/mix improvement. The upside requires repeat purchases, not just new listings; the downside allows trial to fade. These are explicit business conditions, not an extrapolation from the seven-product audit.',
    scenarios: [
      { name: 'Conservative', volume: -2, price: 0, laterVolume: -1, laterPrice: 1, rationale: 'Repeat purchase weakens; promotion limits price realisation.' },
      { name: 'Neutral', volume: 2, price: 1, laterVolume: 1, laterPrice: 2, rationale: 'Repeat purchase supports gradual unit growth; pricing remains disciplined.' },
      { name: 'Optimistic', volume: 5, price: 2, laterVolume: 3, laterPrice: 2, rationale: 'Trial converts to repeat use and broader distribution sustains volume.' },
    ],
    peerFamily: 'Nutrition',
    peers: [
      { name: 'Simply Good Foods', specialist: true, professional: false, evidence: 'Nutrition-led consumer portfolio: Quest, Atkins and OWYN. Classified as consumer-brand-led, not as a protein-bar-only business.', source: 7 },
      { name: 'Glanbia', specialist: true, professional: 'both', evidence: 'Performance Nutrition consumer brands alongside a nutrition-ingredients platform. Both activities are shown. Included as a value-chain peer, not a bar-market-share comparator.', source: 8 },
    ],
    peerInsight: 'The competitive boundary includes both branded products and ingredient capabilities. Simply Good Foods and Glanbia illustrate different operating models. The map classifies disclosed business focus; it does not rank companies or infer protein-bar revenue from group sales.[7][8]',
    trade: 'Protein bars require recipe-specific customs classification: a product name is not a tariff code. Separate ingredient exposure from finished-bar imports, and assess nutrition claims against FDA requirements before selecting the US proposition.[5][6]',
    contents: [
      { title: 'Protein sources and formulation boundaries', anchor: 'segments' }, { title: 'Pack-normalised prices and Target comparisons', anchor: 'pricing' },
      { title: 'Repeat-purchase and price/mix scenarios', anchor: 'forecast' }, { title: 'Nutrition brands and ingredient capabilities', anchor: 'competition' },
      { title: 'Recipe-specific customs and label claims', anchor: 'trade' }, { title: 'Product records and calculation notes', anchor: 'sources' },
    ],
    sources: [
      { title: 'Quest: Cookie Dough bar', url: 'https://www.questnutrition.com/products/chocolate-chip-cookie-dough-protein-bar', locator: '12-pack $31.97; 21 g labelled protein per bar. Observed 5 September 2026.' },
      { title: 'ALOHA: Cookie Dough bar', url: 'https://aloha.com/products/chocolate-chip-cookie-dough-protein-bar', locator: '12-pack $34.99; 14 g protein per bar. Observed 5 September 2026.' },
      { title: 'David: Cookie Dough bar', url: 'https://davidprotein.com/products/chocolate-chip-cookie-dough', locator: 'Gold, 12-pack $39; 28 g protein per bar. Observed 5 September 2026.' },
      { title: 'Target: Quest 12-pack', url: 'https://www.target.com/p/quest-nutrition-protein-bar-chocolate-chip-cookie-dough-12ct/-/A-53111647', locator: '$26.49; matched to Quest brand-direct 12-pack. Observed 5 September 2026.' },
      fda, { title: 'CBP: Bar classification ruling', url: 'https://rulings.cbp.gov/ruling/H340269', locator: 'Product-specific classification analysis; not a universal protein-bar tariff determination.' },
      { title: 'Simply Good Foods: Brands', url: 'https://www.thesimplygoodfoodscompany.com/our-brands-0', locator: 'Own brand portfolio. Accessed 6 September 2026.' },
      { title: 'Glanbia: Business model', url: 'https://www.glanbia.com/about/our-business-model', locator: 'Consumer nutrition and ingredient businesses. Accessed 6 September 2026.' },
    ], related: ['breakfast-cereals', 'biscuits', 'bakery-products'],
  },
  'bakery-products': {
    slug: 'bakery-products', title: 'Bakery Products', strapline: 'Freshness is an operating model, not just a product claim.',
    scope: 'US consumer-price evidence and international operating-model peers. July 2026 observations; 2027-2031 conditional outlook.',
    segments: [
      { name: 'Packaged bread', definition: 'Ambient loaves, buns and rolls for repeated household use.', lever: 'Route density and repeat purchase' },
      { name: 'Fresh bakery', definition: 'Short-life goods finished or sold through local bakeries.', lever: 'Labour, waste and daily throughput' },
      { name: 'Bake-off', definition: 'Semi-finished products baked or finished at the point of sale.', lever: 'Cold chain and operator productivity' },
      { name: 'Sweet baked goods', definition: 'Cakes and morning goods, separated from staple bread.', lever: 'Occasion, portion and price/mix' },
    ],
    channels: [
      { name: 'Branded retail', definition: 'Consumer brands sold through grocery and mass retail.', lever: 'Repeat demand and promotions' },
      { name: 'Retailer label', definition: 'Products manufactured to a retailer specification.', lever: 'Contract economics and utilisation' },
      { name: 'In-store bakery', definition: 'Freshly finished or baked-off retail assortments.', lever: 'Availability versus waste' },
      { name: 'Foodservice', definition: 'Restaurants, QSR and institutional operators.', lever: 'Consistency and labour saved' },
    ],
    segmentInsight: 'Bakery products should be segmented by production and fulfilment as well as recipe. A packaged loaf, a fresh cake and a frozen bake-off item have different waste, labour and distribution economics. ARYZTA explicitly organises around bake-off and three customer channels; Flowers separates branded retail from other sales. These are distinct business models, not interchangeable revenue pools.[3][4]',
    priceTitle: 'Bread inflation outpaced the broader bakery basket',
    prices: [{ name: 'Bread', value: 3.7 }, { name: 'Cakes, cupcakes and cookies', value: 3.4 }, { name: 'Fresh biscuits, rolls and muffins', value: 1.6 }, { name: 'Other bakery products', value: 1.3 }],
    priceInsight: 'US bread prices rose 3.7% year on year in July, against 2.4% for bakery products overall. That divergence argues for segment-specific pricing. Price growth does not establish unit growth: Flowers reported lower volume in fiscal 2025 despite higher total sales, with acquisitions and an extra trading week affecting the comparison.[1][3]',
    scenarioIntro: 'The neutral case assumes broadly stable units and moderate price/mix gains. Capacity decisions should work under the conservative case, where weaker demand offsets much of the pricing benefit. The upside requires better throughput and sell-through, rather than simply raising shelf prices.',
    scenarios: [
      { name: 'Conservative', volume: -2, price: 1, laterVolume: -1, laterPrice: 1, rationale: 'Weak household demand and waste offset limited pricing gains.' },
      { name: 'Neutral', volume: 0, price: 2, laterVolume: 0, laterPrice: 2, rationale: 'Staple demand stabilises; measured pricing supports nominal revenue.' },
      { name: 'Optimistic', volume: 2, price: 3, laterVolume: 1, laterPrice: 2, rationale: 'Better availability and format innovation lift units before growth moderates.' },
    ],
    peerFamily: 'Bakery / snacking', peers: [
      { name: 'Flowers Foods', specialist: true, professional: 'both', evidence: 'Bakery-focused portfolio; branded retail represented 65.9% of FY2025 sales. The report also documents foodservice and contract manufacturing. Both activities are shown without allocating the Other sales category entirely to foodservice.', source: 3 },
      { name: 'ARYZTA', specialist: true, professional: true, evidence: 'Bakery specialist supplying retail bake-off, QSR and other foodservice. International operating-model comparator; not a claim of US market presence.', source: 4 },
      { name: "Campbell's", specialist: false, professional: false, evidence: 'Consumer brands spanning Snacks and Meals & Beverages, including Pepperidge Farm. Classified at group level, not as the Pepperidge Farm subsidiary.', source: 5 },
    ],
    peerInsight: 'Bakery specialists and diversified food groups face different portfolio choices. The map distinguishes primary business orientation, with ARYZTA included as an international bake-off comparator. Position does not imply market share, profitability or product quality.[3][4][5]',
    trade: 'Separate finished bakery goods, mixes and ingredients in customs analysis. Frozen logistics and remaining shelf life can change landed economics before duty does. Verify the applicable US tariff edition and product specification; nutrition-led claims require a separate FDA assessment.[2][6]',
    contents: [
      { title: 'Fresh, packaged and bake-off economics', anchor: 'segments' }, { title: 'Bread versus sweet-goods price pressure', anchor: 'pricing' },
      { title: 'Throughput and pricing scenarios', anchor: 'forecast' }, { title: 'Bakery specialists versus diversified groups', anchor: 'competition' },
      { title: 'Cold-chain and customs boundaries', anchor: 'trade' }, { title: 'Price series and company definitions', anchor: 'sources' },
    ], sources: [bls, fda, flowers, aryzta, campbell, hts], related: ['cakes', 'biscuits', 'breakfast-cereals'],
  },
  'biscuits': {
    slug: 'biscuits', title: 'Biscuits', strapline: 'Sweet and savoury need different price strategies.',
    scope: 'US cookies and cracker price evidence; international company portfolios. Fresh American-style biscuits are outside this category.',
    segments: [
      { name: 'Plain sweet', definition: 'Unfilled sweet biscuits and cookies.', lever: 'Pack value and repeat frequency' },
      { name: 'Filled / sandwich', definition: 'Biscuits with a cream, fruit or other filling.', lever: 'Filling cost and differentiation' },
      { name: 'Coated', definition: 'Chocolate or other coated products; code filling separately.', lever: 'Cocoa exposure and portion size' },
      { name: 'Savoury crackers', definition: 'Crackers positioned around savoury eating occasions.', lever: 'Occasion breadth and pack format' },
    ],
    channels: [
      { name: 'Take-home packs', definition: 'Family, sharing and replenishment formats.', lever: 'Price per 100 g and promotion' },
      { name: 'Portion packs', definition: 'Individually wrapped servings and lunchbox formats.', lever: 'Packaging cost versus convenience' },
      { name: 'Hospitality', definition: 'Biscuits supplied with drinks or through catering.', lever: 'Cost per serving and reliability' },
      { name: 'Seasonal / gifting', definition: 'Occasion-specific assortments and presentation packs.', lever: 'Premium realisation and stock risk' },
    ],
    segmentInsight: 'Biscuits are not a single pricing problem. Separate sweet products from savoury crackers, then code filling and coating as attributes so overlapping recipes are not counted twice. Portfolio disclosure also needs care: Lotus reports Biscoff alongside Natural Foods and Local Heroes. A company total therefore cannot be assigned to plain sweet biscuits.[3]',
    priceTitle: 'Cracker price growth exceeded cookie price growth',
    prices: [{ name: 'Crackers, bread and cracker products', value: 4.5 }, { name: 'Cookies', value: 2 }, { name: 'Bakery products benchmark', value: 2.4 }],
    priceInsight: 'US cookie prices rose 2.0% year on year in July; the broader cracker series rose 4.5%. The 2.5-point gap supports separate price architecture for sweet and savoury products. The cracker series includes bread and related products, so the comparison is an inflation signal, not a pure cracker market-size estimate.[1]',
    scenarioIntro: 'The neutral case assumes stable units and moderate realised pricing. The conservative case combines weaker frequency with promotional pressure. The optimistic case requires incremental occasions and improved mix; cocoa-led price increases alone would not demonstrate stronger demand.',
    scenarios: [
      { name: 'Conservative', volume: -2, price: 0, laterVolume: -1, laterPrice: 1, rationale: 'Households reduce frequency while promotional intensity restricts realised pricing.' },
      { name: 'Neutral', volume: 0, price: 2, laterVolume: 1, laterPrice: 2, rationale: 'Core frequency holds, then occasion expansion produces modest unit growth.' },
      { name: 'Optimistic', volume: 2, price: 3, laterVolume: 2, laterPrice: 2, rationale: 'Portion formats and new occasions support both units and mix.' },
    ],
    peerFamily: 'Bakery / snacking', peers: [
      { name: 'Lotus Bakeries', specialist: true, professional: false, evidence: 'Branded snacking focus across Biscoff, Natural Foods and Local Heroes. The classification includes spreads and related products; it is not a biscuit-only revenue claim.', source: 3 },
      { name: 'Flowers Foods', specialist: true, professional: 'both', evidence: 'Bakery-led consumer portfolio including Simple Mills, alongside documented foodservice and contract manufacturing. Both activities are shown; no biscuit-only channel shares are inferred.', source: 4 },
      { name: "Campbell's", specialist: false, professional: false, evidence: 'Pepperidge Farm, Goldfish and Lance sit within a wider Snacks and Meals & Beverages group. The plotted entity is the parent company.', source: 5 },
    ],
    peerInsight: 'Specialist snack portfolios and diversified food groups allocate investment differently. Compare the relevant brand and channel before comparing parent-company results. Flowers also discloses professional supply; it appears in both rows. An empty quadrant is not a claim that the market has no suppliers of that type.[3][4][5]',
    trade: 'Treat sweet biscuits, wafers and savoury products separately when checking customs coverage. A broad bakery trade total is not biscuit consumption. Claims such as protein or fibre content need to satisfy the applicable labelling rules, not simply match a competing pack.[2][6]',
    contents: [
      { title: 'Sweet, filled, coated and savoury boundaries', anchor: 'segments' }, { title: 'Cookie versus cracker pricing', anchor: 'pricing' },
      { title: 'Frequency, occasion and mix scenarios', anchor: 'forecast' }, { title: 'Specialist brands within broader portfolios', anchor: 'competition' },
      { title: 'Wafer, biscuit and claim classifications', anchor: 'trade' }, { title: 'CPI coverage and company evidence', anchor: 'sources' },
    ], sources: [bls, fda, lotus, flowers, campbell, hts], related: ['bakery-products', 'cakes', 'protein-bars'],
  },
  'breakfast-cereals': {
    slug: 'breakfast-cereals', title: 'Breakfast Cereals', strapline: 'Winning breakfast requires more than a higher shelf price.',
    scope: 'US breakfast-price evidence with selected international peers. Ready-to-eat and hot cereals; snack bars are analysed separately.',
    segments: [
      { name: 'Flakes / shaped cereals', definition: 'Ready-to-eat grain formats, plain or sweetened.', lever: 'Serving economics and household repeat' },
      { name: 'Granola / clusters', definition: 'Baked cereal clusters with recipe-specific inclusions.', lever: 'Ingredient mix and portion size' },
      { name: 'Muesli', definition: 'Blended grains, fruit and nuts without a uniform recipe.', lever: 'Inclusion cost and differentiation' },
      { name: 'Hot cereals', definition: 'Oats and other grains prepared before consumption.', lever: 'Preparation time and cost per bowl' },
    ],
    channels: [
      { name: 'Household retail', definition: 'Boxes, bags and multipacks for at-home breakfast.', lever: 'Repeat purchase and serving count' },
      { name: 'Portion formats', definition: 'Single-serve cups and controlled portions.', lever: 'Convenience premium and packaging' },
      { name: 'Hospitality', definition: 'Hotels and catering breakfast service.', lever: 'Waste and cost per guest' },
      { name: 'Institutional', definition: 'Education and workplace foodservice.', lever: 'Specification and contract economics' },
    ],
    segmentInsight: 'Breakfast cereal competes for an eating occasion, not just shelf space. Separate preparation-led hot cereals from ready-to-eat formats, and assess serving size before comparing pack value. Post distinguishes cereal and granola from eggs and other businesses in its disclosures; its group sales are not a cereal market denominator.[3]',
    priceTitle: 'Cereal prices rose faster than the at-home food basket',
    prices: [{ name: 'Breakfast cereal', value: 4.1 }, { name: 'Bread: adjacent breakfast choice', value: 3.7 }, { name: 'Food at home benchmark', value: 2.7 }],
    priceInsight: 'US breakfast cereal prices increased 4.1% year on year in July, above the 2.7% food-at-home benchmark. This widens the affordability question without proving consumer switching. A launch should make the cost per bowl and preparation benefit explicit; neither a protein claim nor a smaller pack automatically creates incremental demand.[1][2]',
    scenarioIntro: 'Our neutral case allows a modest initial unit decline before stabilisation. The upside depends on recovering breakfast occasions and repeat use. The conservative case assumes continuing substitution and promotions, even while nominal prices rise. The public model separates unit demand from price/mix.',
    scenarios: [
      { name: 'Conservative', volume: -3, price: 1, laterVolume: -2, laterPrice: 1, rationale: 'Breakfast substitution persists and promotion limits price recovery.' },
      { name: 'Neutral', volume: -1, price: 2, laterVolume: 0, laterPrice: 2, rationale: 'Initial volume pressure eases; pricing moderates from current inflation.' },
      { name: 'Optimistic', volume: 2, price: 3, laterVolume: 1, laterPrice: 2, rationale: 'Convenient formats and repeat use recover occasions, then growth normalises.' },
    ],
    peerFamily: 'Grains / breakfast', peers: [
      { name: "Bob's Red Mill", specialist: true, professional: true, evidence: 'Grain and ingredient specialist with an explicit foodservice and bulk-supply offer. Positioned for that professional-supply capability, not as an exclusively B2B company.', source: 5 },
      { name: 'Post Holdings', specialist: false, professional: 'both', evidence: 'Consumer cereal businesses alongside eggs, refrigerated foods and an explicit Foodservice segment. Both consumer and professional activities are shown.', source: 3 },
      { name: 'General Mills', specialist: false, professional: 'both', evidence: 'Diversified consumer-food group with a separate North America Foodservice segment. Both activities are shown; company sales are not assigned entirely to cereal.', source: 4 },
    ],
    peerInsight: 'Ingredient specialists, diversified consumer groups and foodservice platforms address different buying needs. The company map highlights operating orientation rather than cereal share. Post and General Mills both extend well beyond breakfast, so their consolidated results should remain context, not category totals.[3][4][5]',
    trade: 'Prepared cereal, minimally processed oats and cereal bars need separate product specifications in a trade model. Processing and recipe affect classification. FDA label-claim rules belong in formulation decisions early, particularly where a product is positioned around protein or another nutrient.[2][6]',
    contents: [
      { title: 'Ready-to-eat, granola, muesli and hot cereal', anchor: 'segments' }, { title: 'Cost pressure within the breakfast occasion', anchor: 'pricing' },
      { title: 'Occasion recovery and price/mix scenarios', anchor: 'forecast' }, { title: 'Cereal brands and professional supply platforms', anchor: 'competition' },
      { title: 'Processing boundaries and nutrition claims', anchor: 'trade' }, { title: 'Price benchmarks and portfolio sources', anchor: 'sources' },
    ], sources: [bls, fda, post, generalMills, bobs, hts], related: ['protein-bars', 'bakery-products', 'biscuits'],
  },
  'cakes': {
    slug: 'cakes', title: 'Cakes', strapline: 'Occasion and shelf life shape the profit opportunity.',
    scope: 'US fresh-cake pricing and adjacent bakery benchmarks. Packaged, celebration and professional formats assessed separately.',
    segments: [
      { name: 'Packaged snack cakes', definition: 'Ambient individual or multipack everyday portions.', lever: 'Distribution and repeat frequency' },
      { name: 'Fresh cakes / cupcakes', definition: 'Short-life ready-to-eat formats.', lever: 'Waste, labour and daily throughput' },
      { name: 'Celebration cakes', definition: 'Made-to-order or occasion-led whole cakes.', lever: 'Customisation and order value' },
      { name: 'Frozen / thaw-and-serve', definition: 'Finished or semi-finished cakes for later service.', lever: 'Cold chain and operator convenience' },
    ],
    channels: [
      { name: 'Grocery shelf', definition: 'Branded or retailer-label packaged cake.', lever: 'Shelf productivity and promotion' },
      { name: 'Bakery counter', definition: 'Fresh portions and whole cakes sold locally.', lever: 'Yield, freshness and availability' },
      { name: 'Pre-order', definition: 'Customised celebration orders.', lever: 'Deposit, labour and fulfilment' },
      { name: 'Professional supply', definition: 'Catering, restaurant and hospitality formats.', lever: 'Cost per portion and reliability' },
    ],
    segmentInsight: 'Cake economics are driven by occasion and service requirements. A celebration order cannot be modelled as a routine snack purchase, and frozen professional supply should not inherit the waste assumptions of a fresh counter. ARYZTA describes semi-finished and thaw-and-serve formats; Smucker separately reports Sweet Baked Snacks within a much broader food portfolio.[3][4]',
    priceTitle: 'Fresh cakes and frozen bakery moved in opposite directions',
    prices: [{ name: 'Fresh cakes and cupcakes', value: 4.4 }, { name: 'Fresh sweetrolls, coffeecakes, doughnuts', value: 2.6 }, { name: 'Frozen / refrigerated bakery, pies and tarts', value: -1.8 }],
    priceInsight: 'Fresh cake and cupcake prices rose 4.4% year on year in July, while the broad frozen and refrigerated bakery series fell 1.8%. The 6.2-point spread makes a single inflation assumption unsuitable across formats. The frozen comparator also includes pies, tarts and turnovers; it is a neighbouring price benchmark, not a cake-only segment.[1]',
    scenarioIntro: 'The neutral case holds units steady while price/mix improves moderately. In the downside, lower discretionary frequency and promotion outweigh premium occasions. The upside requires stronger occasion conversion and portion innovation, with slower growth after the initial expansion. Revenue growth should not be mistaken for margin improvement.',
    scenarios: [
      { name: 'Conservative', volume: -3, price: 0, laterVolume: -1, laterPrice: 1, rationale: 'Discretionary frequency falls; promotions and waste weigh on realisation.' },
      { name: 'Neutral', volume: 0, price: 2, laterVolume: 0, laterPrice: 2, rationale: 'Everyday demand stabilises; occasion mix supports modest nominal growth.' },
      { name: 'Optimistic', volume: 3, price: 3, laterVolume: 1, laterPrice: 2, rationale: 'Occasion conversion and portion formats lift demand before growth moderates.' },
    ],
    peerFamily: 'Bakery / snacking', peers: [
      { name: 'Flowers Foods', specialist: true, professional: 'both', evidence: 'Bakery-focused group with Tastykake and other cake lines, plus foodservice and contract manufacturing. Both activities are shown. Bread sales are not treated as cake sales.', source: 5 },
      { name: 'ARYZTA', specialist: true, professional: true, evidence: 'Professional bake-off and sweet baked supply across retail, QSR and foodservice. Included as an international operating-model comparator.', source: 4 },
      { name: 'J.M. Smucker', specialist: false, professional: false, evidence: 'Hostess within a diversified group spanning coffee, spreads and pet products. Parent-company placement, not a score for the Hostess brand.', source: 3 },
    ],
    peerInsight: 'Cake competitors combine different fulfilment and portfolio models. Bakery specialists, professional suppliers and diversified brand owners are distinct counterparties for a partnership or acquisition screen. The matrix is an SMR interpretation of disclosed activities, not a numerical ranking.[3][4][5]',
    trade: 'A cake trade model must distinguish finished products from mixes and preserve cold-chain requirements. Broad bakery headings also contain non-cake products. Verify the current tariff edition against the actual recipe and processing, and assess nutrient claims independently under FDA rules.[2][6]',
    contents: [
      { title: 'Everyday, celebration and frozen formats', anchor: 'segments' }, { title: 'Fresh versus frozen price divergence', anchor: 'pricing' },
      { title: 'Occasion conversion and revenue scenarios', anchor: 'forecast' }, { title: 'Brand owners and professional bakery suppliers', anchor: 'competition' },
      { title: 'Finished cake, mix and cold-chain boundaries', anchor: 'trade' }, { title: 'Price comparators and company disclosures', anchor: 'sources' },
    ], sources: [bls, fda, smucker, aryzta, flowers, hts], related: ['bakery-products', 'biscuits', 'breakfast-cereals'],
  },
};

export function scenarioPath(scenario: Scenario, priceShift = 0) {
  let value = 100;
  return Array.from({ length: 6 }, (_, index) => {
    const year = 2026 + index;
    if (index > 0) {
      const early = year <= 2028;
      value *= (1 + (early ? scenario.volume : scenario.laterVolume) / 100) * (1 + ((early ? scenario.price : scenario.laterPrice) + priceShift) / 100);
    }
    return { year, value };
  });
}
