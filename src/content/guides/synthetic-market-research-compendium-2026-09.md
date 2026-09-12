## What matters now

The conversation around synthetic research has shifted from *can a model answer a survey?* to
*how well does it answer one, and how would anybody know?* Across the evidence, the same
questions recur: where synthetic systems are useful, how their outputs should be assessed and
what they cannot replace.

Three things stand out. First, the field produced **measurement**: total simulated survey
error, psychometric audits of model respondents, scales for detecting machine-written answers
and preregistered out-of-sample tests of discrete-choice experiments all landed this year. The
recurring verdict is that synthetic respondents are *plausible but not valid*, and that they
fail hardest where a study needs a real sampling frame rather than a fluent imitation of one.

Second, "silicon sampling" is a named lineage now, not a novelty, and the interesting failures
are structural rather than prompt-level: a well-argued preprint contends that instruction-tuned
models cannot faithfully sample from the distributions they are asked to represent, whatever
the persona text says. Conditioning ablations benchmarked against real probability samples show
where the conditioning effort should go.

Third, the statistics and privacy literature runs years ahead of research practice. Disclosure
control, differential-privacy trade-offs and quality checks for low-fidelity synthetic data are
settled engineering there, and regulators and statistical agencies frame synthetic data as a
*privacy* tool, not an insight tool. Market-research-facing guidance, such as the silicon-sample
guidelines in NIM Marketing Intelligence Review, still reads as provisional.

Digital twins ran on a separate track - industrial, health and urban, heavy on standardisation -
with the consumer twin still mostly a promise.

Treat synthetic data as an input that must be evaluated, rather than a substitute for
evidence. Decisions should remain clear about the sources, assumptions and validation
behind them.

## The 2026 evidence map

| Theme | Published work | Directly relevant | Open access | Videos | Public posts |
|---|---:|---:|---:|---:|---:|
| Synthetic respondents (AI-simulated survey participants) | 502 | 272 | 90% | 16 | 0 |
| Simulated consumers, personas and generative agents | 1,167 | 294 | 83% | 6 | 0 |
| Synthetic market research, conjoint and choice experiments | 1,258 | 99 | 73% | 5 | 11 |
| Synthetic data: methods, privacy and official statistics | 1,060 | 252 | 86% | 14 | 9 |
| Digital twins (consumer, human, urban, industrial) | 1,010 | 754 | 73% | 18 | 13 |
| Governance, regulation and privacy-enhancing technology | 516 | 45 | 75% | 8 | 10 |

**Institutions represented**

- Prompt (Canada) — 32
- Carnegie Mellon University — 27
- University of Konstanz — 27
- Cornell University — 25
- Statnett (Norway) — 24
- University of Mannheim — 18
- Innovation Team (China) — 18
- Huawei Technologies (China) — 17
- Politecnico di Milano — 16
- Cobuilder (Norway) — 15
- The University of Texas at Austin — 13
- National University of Singapore — 13
- Office for National Statistics — 13
- Pro Persona — 13
- George Mason University — 12
- Max Planck Institute for Human Development — 12
- Sichuan University — 12
- University of Technology Sydney — 12
- Khon Kaen University — 11
- Tongji University — 11
- Centre National de la Recherche Scientifique — 11
- Tsinghua University — 11
- Istituto Nazionale di Statistica — 11
- Stanford University — 10
- Institut d'Etudes Politiques de Paris — 10

**Where the work appears**

- Zenodo (CERN European Organization for Nuclear Research) — 1296
- arXiv (Cornell University) — 491
- SSRN Electronic Journal — 170
- Figshare — 63
- Lecture notes in computer science — 52
- Research Square — 38
- OSF Preprints (OSF Preprints) — 38
- Mendeley Data — 36
- Statistical Journal of the IAOS — 35
- AEA Randomized Controlled Trials — 34
- Underline Science Inc. — 33
- The international archives of the photogrammetry, remote sensing and spatial information sciences/International archives of the photogrammetry, remote sensing and spatial information sciences — 24
- Applied Sciences — 23
- Preprints.org — 22
- Scientific Reports — 20
- Advances in computational intelligence and robotics book series — 17
- Lecture notes in networks and systems — 17
- Springer texts in business and economics — 17
- Sustainability — 16
- Astronomy and Astrophysics — 15

## A. Synthetic respondents (AI-simulated survey participants)

Research on systems that substitute or augment human survey participants with model-generated ones. It includes accuracy audits against real benchmarks, the token-probability/"silicon sampling" lineage and the emerging critique literature.


### Selected reading

- **2025-11-20** — [The potential existential threat of large language models to online survey research](https://doi.org/10.1073/pnas.2518075122) · **OA** · cited 61<br>Proceedings of the National Academy of Sciences · Dartmouth College (US)
- **2026-09-02** — [Do LLMs Get The Treatment? Testing the Limits of Synthetic Respondents in Survey Experiments](https://doi.org/10.5281/zenodo.22249567) · **OA**<br>Zenodo (CERN European Organization for Nuclear Research) · ETH Zurich (CH)
- **2026-01-01** — [Silicon Sampling: Supporting Survey Research with Large Language Models](https://doi.org/10.2139/ssrn.7362005) · **OA**<br>SSRN Electronic Journal
- **2026-01-01** — [Silicon Sampling in Seoul: Conditioning Ablations for LLM Survey Simulation against a Probability Sample](https://doi.org/10.2139/ssrn.7262218) · **OA**<br>SSRN Electronic Journal · Systems, Applications & Products in Data Processing (United Kingdom) (GB)
- **2026-04-08** — [Your Next Respondent Might Be an LLM: Guidelines for Using Silicon Samples in Marketing Research](https://doi.org/10.2478/nimmir-2026-0004) · **OA** · cited 2<br>NIM Marketing Intelligence Review · Babeș-Bolyai University (RO)
- **2026-09-09** — [Total Simulated Survey Error: Designing and Diagnosing Survey Responses from Large Language Models](https://doi.org/10.48550/arxiv.2609.10280) · **OA**<br>arXiv (Cornell University)
- **2026-08-06** — [Calibrated Population Diversity: Closing the Loop Between Survey Fidelity and Agentic Behavior in Synthetic Respondents](https://doi.org/10.5281/zenodo.21829124) · **OA**<br>Zenodo (CERN European Organization for Nuclear Research)
- **2026-07-15** — [Can Large Language Model Synthetic Respondents Anticipate Human Preferences? An Out-of-Sample Test in a Preregistered Discrete Choice Experiment](https://doi.org/10.17605/osf.io/mygp7) · **OA**<br>
- **2026-07-06** — [Plausible but Not Valid: A Psychometric Audit of LLMs as Synthetic Survey Respondents](https://doi.org/10.48550/arxiv.2608.14606) · **OA**<br>arXiv (Cornell University)
- **2026-07-03** — [Silicon Sampling via Cross-Survey Transfer](https://arxiv.org/pdf/2607.03091) · **OA**<br>arXiv (Cornell University) · National Sun Yat-sen University (TW)
- **2026-05-08** — [Hierarchy of Personas: Investigating Variation in Synthetic LGBTQ-Related Survey Responses by Persona-Prompted Large Language Models](https://doi.org/10.31235/osf.io/cd53z_v1) · **OA**<br>
- **2026-03-21** — [A scale for detecting LLM-generated responses in online survey research](https://doi.org/10.31234/osf.io/4p7ns_v5) · **OA**<br>
- **2026-02-16** — [Large Language Models as Synthetic Respondents for Economic Preferences: A Global Audit](https://doi.org/10.21203/rs.3.rs-8775326/v1) · **OA**<br>Research Square · Zhejiang University (CN)
- **2026-02-10** — [Stochastic Parrots or Singing in Harmony? Testing Five Leading LLMs for their Ability to Replicate a Human Survey with Synthetic Data](https://doi.org/10.48550/arxiv.2603.00059) · **OA**<br>arXiv (Cornell University)


### Watch

- [Meet Fairgen: Boost Survey Samples with Predictive Synthetic Respondents](https://www.youtube.com/watch?v=3rMchvawUZQ) — Fairgen · 1 year ago
- [Synthetic Respondents for SMB: Selling PC](https://www.youtube.com/watch?v=A12VxeTlu1Y) — Synthetic Respondents · 5 months ago
- [Synthetic Respondents for Boutique Hotel: How a Self Check-In Hotel Can Get Reviews?](https://www.youtube.com/watch?v=9YRjFn7VjNw) — Synthetic Respondents · 5 months ago
- [Synthetic Respondents for Healthy Snacks: How can we lower the barrier for first-time purchases?](https://www.youtube.com/watch?v=PezFO9tRrt8) — Synthetic Respondents · 5 months ago
- [Synthetic Respondents: The Smarter Way to Test Startup Ideas](https://www.youtube.com/watch?v=c8xhrnsV_NE) — Grishin Robotics · 1 month ago
- [Free Survey Responses Using Synthetic Users in ChatGPT](https://www.youtube.com/watch?v=9tFgtwLFcWU) — Weavely · 1 year ago
- [Get insights from synthetic respondents in 7 minutes](https://www.youtube.com/watch?v=IlMkvS1M9to) — icanpreneur · 1 month ago
- [Instruction tuning breaks a model's ability to sample (Silicon Sampling)](https://www.youtube.com/watch?v=9vibFR0OFPI) — AI Papers: A Deep Dive · 1 month ago
- [Perspectives on AI: Can AI "digital twins" replace human respondents?](https://www.youtube.com/watch?v=VNRvTQTjzsI) — Association of Public Data Users (APDU) · 2 weeks ago
- [Are synthetic personas actually useful? Here's what the research says](https://www.youtube.com/watch?v=TiWV4j95pck) — Sourced Economics · 3 months ago
- [$100K Market Research for $50? How AI Synthetic Personas Are Changing Product Development](https://www.youtube.com/watch?v=ydZRKOJJfxA) — TheProfessor · 6 months ago
- [Persona Engineering: A Field Guide to AI Synthetic Personas — Ishan Anand, InsightSciences.ai](https://www.youtube.com/watch?v=YnNF55QV0zs) — AI Engineer · 1 month ago
- [Synthetic Survey Data? It's Not Data](https://www.youtube.com/watch?v=inAWlyqIqBc) — Leap Research · 6 months ago
- [From ESOMAR - Man vs. Machine: Quest explores synthetic data in real-world tests](https://www.youtube.com/watch?v=EiDouWG4DHg) — Quest Mindshare · 1 year ago
- [Synthetic Data vs Actual Human Insight](https://www.youtube.com/watch?v=vkjVC7xt-Rc) — Nexxt Intelligence / inca · 7 months ago
- [How to 3× Sample Size Without Refielding, Synthetic Data for Quant Research](https://www.youtube.com/watch?v=OD0G903z9Z4) — Fairgen · 8 months ago


### In the news

- **2026-09-07** — [Digital Twin in Healthcare: Virtual Revolution](https://www.medindia.net/news/healthwatch/digital-twin-in-healthcare-virtual-revolution-225101-1.htm) — medindia.net
- **2026-09-05** — [AI twins were supposed to think like real people, but scientists found they were more rational, more trusting and surprisingly different](https://www.msn.com/en-in/news/other/ai-twins-were-supposed-to-think-like-real-people-but-scientists-found-they-were-more-rational-more-trusting-and-surprisingly-different/ar-AA2bDQ8R) — msn.com
- **2026-08-21** — [AI Disrupts Glass Fiber Manufacturing: Predictive Maintenance, Digital Twins, and a $6 Billion Infrastructure Deal Signal a New Industrial Era](https://finance.yahoo.com/technology/ai/articles/ai-disrupts-glass-fiber-manufacturing-152300178.html) — finance.yahoo.com
- **2026-06-23** — [While Everyone Fakes Survey Data, Tunnl Doubles Down on Real People](https://www.usatoday.com/press-release/story/35331/while-everyone-fakes-survey-data-tunnl-doubles-down-on-real-people/) — usatoday.com
- **2026-04-13** — [From Weeks to Minutes: Synthetic Respondents Launches AI Research Platform Trained on 2M+ Research Responses](https://www.independentmail.com/press-release/story/52935/from-weeks-to-minutes-synthetic-respondents-launches-ai-research-platform-trained-on-2m-research-responses/) — independentmail.com
- **2025-11-18** — [Synthetic data at scale: The next frontier of market research](https://www.adnews.com.au/opinion/synthetic-data-at-scale-the-next-frontier-of-market-research) — adnews.com.au
- **2025-09-26** — [The Promising Rise Of Synthetic Personas In Market Research](https://www.forbes.com/councils/forbestechcouncil/2025/09/26/the-promising-rise-of-synthetic-personas-in-market-research/) — forbes.com


### Discussion

- **2026-04-07** — [It's Called Silicon Sampling, and It's Going to Ruin Public Opinion Polling](https://www.nytimes.com/2026/04/06/opinion/ai-polling.html) — Hacker News (8 pts, 2 comments) · [thread](https://news.ycombinator.com/item?id=47680851)
- **2026-04-06** — [It's Called Silicon Sampling, and It's Going to Ruin Public Opinion Polling](https://www.nytimes.com/2026/04/06/opinion/ai-polling.html) — Hacker News (9 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=47660020)

### Explore the research library

For a deeper reading list, explore the [full synthetic respondents research library](/research-library/synthetic-market-research-2026/synthetic-respondents).

## B. Simulated consumers, personas and generative agents

Multi-agent frameworks, persona libraries and social-simulation engines that inform how synthetic respondents are designed and evaluated.


### Selected reading

- **2025-10-18** — [Generative AI personas considered harmful? Putting forth twenty challenges of algorithmic user representation in human-computer interaction](https://doi.org/10.1016/j.ijhcs.2025.103657) · **OA** · cited 13<br>International Journal of Human-Computer Studies · University of Vaasa (FI)
- **2026-07-01** — [AgentSociety: Large-scale simulation of LLM-driven generative agents advances understanding of human behaviors and society](https://doi.org/10.26599/if.2026.9710004) · **OA** · cited 7<br>iFuture
- **2026-09-08** — [A Three-Tier Persona Vector for Controllable User Simulation in Agentic Evaluation](https://doi.org/10.48550/arxiv.2609.08592) · **OA**<br>arXiv (Cornell University)
- **2026-08-28** — [PersonaForge: Realistic Multi-Turn User Simulation for Agentic Systems](https://doi.org/10.48550/arxiv.2608.28378) · **OA**<br>arXiv (Cornell University)
- **2026-04-17** — [The Virtual Roundtable: Multi-Agent Personas Simulating the Dynamics of Human Brainstorming](https://arxiv.org/pdf/2606.05178) · **OA**<br>arXiv (Cornell University)
- **2026-02-23** — [RoleSimLLM: Towards large-scale and comprehensive social propagation simulation via role-based LLM-driven agents](https://doi.org/10.1016/j.ipm.2026.104689) · cited 5<br>Information Processing & Management · Shanghai Jiao Tong University (CN)
- **2026-06-09** — [Bridging Behavioral Data, Interaction, and Persona Simulation: A Quantitative Computational Framework for Modeling Consumer Decision-Making](https://hdl.handle.net/10481/114927) · **OA**<br>Institutional Repository of the University of Granada (University of Granada)
- **2025-11-30** — [Agentic Persona Control and Task State Tracking for Realistic User Simulation in Interactive Scenarios](https://arxiv.org/pdf/2601.15290) · **OA**<br>arXiv (Cornell University)
- **2025-10-20** — [LLM-Based Multi-Agent System for Simulating and Analyzing Marketing and Consumer Behavior](https://doi.org/10.48550/arxiv.2510.18155) · **OA**<br>arXiv (Cornell University)
- **2026-09-01** — [A survey of social network simulation in the LLM era: From classical models to Generative Agents](https://doi.org/10.1016/j.knosys.2026.116947) · **OA**<br>Knowledge-Based Systems · Griffith University (AU)
- **2026-09-01** — [Disclosure-Gated User Simulation for Companion-Agent Evaluation](https://doi.org/10.48550/arxiv.2609.00982) · **OA**<br>arXiv (Cornell University)
- **2026-08-16** — [PersonaEval: Persona-Based User Simulation for Evaluating Interactive Applications](https://doi.org/10.48550/arxiv.2608.15838) · **OA**<br>arXiv (Cornell University)
- **2026-08-14** — [From Feed to Conversation:How AI Brand Persona Continuity Shapes Social Presence and Consumer Trust](https://doi.org/10.21203/rs.3.rs-10413097/v1) · **OA**<br>Research Square · ICFAI Foundation for Higher Education (IN)
- **2026-07-20** — [Beyond the Lookup: Simulating Realistic User Uncertainty for the Evaluation of Conversational Agentic Recommenders](https://doi.org/10.1007/s10796-026-10787-3) · **OA**<br>Information Systems Frontiers · University of Bari Aldo Moro (IT)


### Watch

- [Synthetic Users: AI “Participants”](https://www.youtube.com/watch?v=q_fdcbwHJKQ) — NNgroup · 1 year ago
- [AlgoVerde’s Superpower: Real-Time Customer Insight with AI Personas](https://www.youtube.com/watch?v=ZMBRi1MhRdc) — AlgoVerde AI · 8 months ago
- [AI Persona Prompting: How to Create Effective AI Personas for Better AI Outputs](https://www.youtube.com/watch?v=zZPlvHtRtT0) — Matthew Esposito / Practical AI · 1 year ago
- [Conduct Research with AI Personas with Atypica](https://www.youtube.com/watch?v=-i_Z0qrhG54) — Vortex Publishing House · 11 months ago
- [How Synthetic Research and AI Personas are Redefining Market Insights with Mavera’s Jill Axline, PhD](https://www.youtube.com/watch?v=qr_lgJtiiRs) — AI Marketers Guild · 8 months ago
- [Personas vs. Digital Twins: Which AI Strategy Wins in 2026?](https://www.youtube.com/watch?v=NXCUnbuCf2E) — Avatar Insights · 6 months ago


### In the news

- **2026-09-09** — [Stravito launches AI Persona Builder](https://retailworldmagazine.com.au/stravito-launches-ai-persona-builder/) — retailworldmagazine.com.au
- **2026-08-26** — [Using Eight Billion AI Personas For Psychology Research Has Its Ups And Downs](https://www.forbes.com/sites/lanceeliot/2026/08/26/using-eight-billion-ai-personas-for-psychology-research-has-its-ups-and-downs/) — forbes.com
- **2026-08-10** — [AI persona practice boosts empathy scores in small pilot study](https://phys.org/news/2026-08-ai-persona-boosts-empathy-scores.html) — phys.org

### Explore the research library

For a deeper reading list, explore the [full simulated consumers and personas research library](/research-library/synthetic-market-research-2026/simulated-consumers).

## C. Synthetic market research, conjoint and choice experiments

Studies that attack research practice directly - LLM-generated conjoint and choice experiments, synthetic survey samples, and the validity questions that follow.


### Selected reading

- **2025-10-02** — [Consumers' Willingness to Pay for Sustainable Mobile Phones: An Adaptive Choice‐Based Conjoint and Market Simulation Approach Testing a Multi‐Level Eco‐Score](https://doi.org/10.1002/bse.70241) · **OA** · cited 2<br>Business Strategy and the Environment · German Institute for Economic Research (DE)
- **2026-09-08** — [Terapage Advances AI Market Research with Pulse for Predictive Consumer Insights](https://doi.org/10.5281/zenodo.22655073) · **OA**<br>Zenodo (CERN European Organization for Nuclear Research)
- **2026-08-26** — [Designing the Search Generative Experience: A Conjoint Analysis of User Preferences and Willingness to Pay](https://doi.org/10.17605/osf.io/3snzf) · **OA**<br>
- **2026-08-20** — [User Valuation of Conversational AI Tutors: A Conjoint Analysis of Preferences and Willingness to Pay](https://doi.org/10.17605/osf.io/g269v) · **OA**<br>
- **2026-03-03** — [Consumer Preferences for AI-Based Smart Home Medical Emergency Detection Among German Adults: Choice-Based Conjoint Analysis (Preprint)](https://doi.org/10.2196/94589) · **OA**<br>JMIR AI
- **2025-11-06** — [Using Generative AI to Enhance Psychometric Scale Development in Market Research](https://doi.org/10.1177/14707853251384769) · **OA** · cited 4<br>International Journal of Market Research · University of Auckland (NZ)
- **2025-11-03** — [Market Barriers to RNAi Adoption in Agriculture: Evidence From a Multi‐Country Discrete Choice Experiment Amongst European Consumers](https://doi.org/10.1002/agr.70051) · **OA** · cited 1<br>Agribusiness · University of Brescia (IT)
- **2026-04-13** — [Simulation of Human Survey Responses for Market Research: The Role of Contextualization in LLM-Based Agents](https://doi.org/10.1145/3772363.3798991) · **OA** · cited 1<br>Fraunhofer Institute for Industrial Engineering (DE)
- **2026-01-21** — [Intelligent Agent-Based Market Research: Cloud-Orchestrated Large Language Models as Financial Analysts](https://doi.org/10.37256/ccds.7120269128) · **OA** · cited 2<br>Cloud Computing and Data Science · Fujian University of Technology (CN)
- **2026-01-07** — [Parental preferences for AI-powered early childhood education tools: a choice experiment](https://doi.org/10.1007/s44436-025-00025-z) · **OA** · cited 2<br>AI Brain and Child · Institute of Economic Affairs (KE)
- **2025-09-30** — [A Framework for Studying AI Agent Behavior: Evidence from Consumer Choice Experiments](https://doi.org/10.48550/arxiv.2509.25609) · **OA**<br>arXiv (Cornell University)
- **2025-09-26** — [Preferences of Patients With Tuberculosis for AI-Assisted Remote Health Management: Discrete Choice Experiment](https://doi.org/10.2196/77491) · **OA** · cited 3<br>Journal of Medical Internet Research · Huazhong University of Science and Technology (CN)
- **2026-03-17** — [Large Language Models for Market Research: A Data-Augmentation Approach](https://doi.org/10.1287/mksc.2025.0009) · cited 4<br>Marketing Science · The University of Texas at Dallas (US)
- **2026-09-08** — [LEBGen: An LLM-Enhanced Bayesian Network Framework for Few-Shot Travel Survey Data Generation](https://doi.org/10.48550/arxiv.2609.08288) · **OA**<br>arXiv (Cornell University)


### Watch

- [Beyond the Hype: Where Synthetic Data Fits in Market Research (Key Takeaways Podcast Episode 19)](https://www.youtube.com/watch?v=lrY6wRUWnoo) — Murphy Research · 1 month ago
- [Synthetic data for market research — the what, the how and the why](https://www.youtube.com/watch?v=GjmFCbRt-LE) — TaleistTV — AI-powered marketing · 1 year ago
- [Synthetic Data Update 2026](https://www.youtube.com/watch?v=mcu3qYAsgOg) — NewMR Videos · 4 months ago
- [What’s the Value of Synthetic Users in Market Research?](https://www.youtube.com/watch?v=KQkxbpOF1NE) — Market Research Institute International · 1 year ago
- [How to Generate Synthetic Data using Python / Create Realistic Fake Dataset for your Project #python](https://www.youtube.com/watch?v=wsJ_Ea1W8Xo) — DATA SCIENCE LOVERS · 7 months ago


### Public conversation

- **2026-08-21** · `@polpsychangel.bsky.social` — Does made up data come close to real data when using LLMs? No.  Synthetic data is made up, stop calling it anything more than that.   papers.ssrn.com/sol3/papers.... — [post](https://bsky.app/profile/polpsychangel.bsky.social/post/3mtlx5ofn622n)
- **2026-08-12** · `@kwcollins.bsky.social` — Listening to a podcast about synthetic sample and it’s proponent is bragging about how well it does it back testing. But of course it does well because all of those outcomes are in the training data. — [post](https://bsky.app/profile/kwcollins.bsky.social/post/3msv55elfz22s)
- **2026-08-09** · `@arxiv-cs-cl.bsky.social` — Alexander Apartsin, Yehudit Aperstein Clinical Communication Processing with Models Trained on LLM-Generated Synthetic Data: A Structured Survey and Novel Application Case Studies https://arxiv.org/ab — [post](https://bsky.app/profile/arxiv-cs-cl.bsky.social/post/3msmhc64mfv2w)
- **2026-08-07** · `@cscl-bot.bsky.social` — Alexander Apartsin, Yehudit Aperstein: Clinical Communication Processing with Models Trained on LLM-Generated Synthetic Data: A Structured Survey and Novel Application Case Studies https://arxiv.org/a — [post](https://bsky.app/profile/cscl-bot.bsky.social/post/3mshx5lp77s2o)
- **2026-08-05** · `@hanowell.me` — The answer to the question: “can you just make up data and get paid for it” before, yknow, synthetic survey respondents were seriously considered by very serious economists. — [post](https://bsky.app/profile/hanowell.me/post/3mschtwuivs2j)
- **2026-07-29** · `@csspenn.bsky.social` — Friday, July 31  Mansfield(210) / Track H / 10:45–12:15   • Can LLMs Approximate Public Opinion? Validating Synthetic Survey Responses Against 40 Waves of Real Survey Data by Elliot Pickens (@elliot-p — [post](https://bsky.app/profile/csspenn.bsky.social/post/3mrqwt3kzyk2u)
- **2026-07-28** · `@mattansb.msbstats.info` — You'll never guess who came across this post while taking a break from analyzing a giant dataset of synthetic survey data. — [post](https://bsky.app/profile/mattansb.msbstats.info/post/3mrovlahlrk2c)
- **2026-07-22** · `@wendynorris.bsky.social` — The dangers of LLMs and synthetic data in survey work.   Westwood, S. J. (2025). The potential existential threat of large language models to online survey research. Proceedings of the National Academ — [post](https://bsky.app/profile/wendynorris.bsky.social/post/3mrbc2hf4gk2i)
- **2026-07-07** · `@ihi-synthia.bsky.social` — Your voice matters. Help shape the future of synthetic data in healthcare by taking part in our European survey. Share to help us reach more citizens across Europe.  🗣️ Read more here: bit.ly/4c7if0o — [post](https://bsky.app/profile/ihi-synthia.bsky.social/post/3mq2ed5emfc2o)
- **2026-06-25** · `@adamdrummond.bsky.social` — There's a scenario where market research shifts en masse to synthetic data with the odd human survey to keep the models fresh. Then the cost of research with real people gets much more expensive or di — [post](https://bsky.app/profile/adamdrummond.bsky.social/post/3mp4di467lk2q)
- **2026-06-25** · `@sophieehill.bsky.social` — I just don't get it... If a "synthetic survey" generated an accurate result at T1, it would either be luck or good aggregation of existing survey data.   Why would we expect it to give an accurate res — [post](https://bsky.app/profile/sophieehill.bsky.social/post/3mp4cmcafkc2r)


### In the news

- **2026-08-30** — [Synthetic data can augment insights, but not replace human research: Vijay Raj at MRSI webinar](https://mediabrief.com/mrsi-vijay-raj-weighs-synthetic-datas-role-in-insights/) — mediabrief.com
- **2026-05-06** — [Market research is too slow for the AI era, so Brox built 60,000 identical 'digital twins' of real people you can survey instantly, repeatedly](https://venturebeat.com/data/market-research-is-too-slow-for-the-ai-era-so-brox-built-60-000-identical-digital-twins-of-real-people-you-can-survey-instantly-repeatedly) — venturebeat.com
- **2026-02-15** — [Verasight releases new study on the limits of synthetic survey data across different topics](https://www.lohud.com/press-release/story/131555/verasight-releases-new-study-on-the-limits-of-synthetic-survey-data-across-different-topics/) — lohud.com
- **2025-09-18** — [Synthetic data has its uses – but real insight needs real people](https://www.marketingweek.com/synthetic-data-real-insight-people/) — marketingweek.com


### Discussion

- **2026-05-20** — [Slow Surveys Are Dead: Terapage CEO on Why Experts Are Moving to Synthetic Data](https://zenodo.org/records/20315637) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=48213251)
- **2026-03-17** — [Why Synthetic Data Can Never Be Ethical: A Lesson from Media Ethics (2024)](https://ojs.library.queensu.ca/index.php/surveillance-and-society/article/download/18324/11978/52201) — Hacker News (1 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=47416066)

### Explore the research library

For a deeper reading list, explore the [full synthetic market research research library](/research-library/synthetic-market-research-2026/synthetic-market-research).

## D. Synthetic data: methods, privacy and official statistics

The statistics and privacy discipline that market research mostly ignores: disclosure control, evaluation metrics, synthetic populations and benchmarking.


### Selected reading

- **2026-01-04** — [Benchmarking Statistical and Deep Generative Models for Privacy-Preserving Synthetic Student Data in Educational Data Mining](https://doi.org/10.3390/a19010039) · **OA** · cited 2<br>Algorithms · University of Patras (GR)
- **2026-01-25** — [From Statistical Disclosure Control to Fair AI: Navigating Fundamental Tradeoffs in Differential Privacy](https://arxiv.org/pdf/2601.17909) · **OA**<br>arXiv (Cornell University)
- **2025-10-28** — [Four checks for low-fidelity synthetic data: recommendations for disclosure control and quality evaluation](https://doi.org/10.23889/ijpds.v10i2.2972) · **OA** · cited 1<br>International Journal for Population Data Science · Scotch Whisky Research Institute (GB)
- **2026-06-20** — [Balancing Privacy, Utility, and Accountability in Microdata Anonymization: A Comprehensive Analysis of Techniques, Risks, and Regulatory Frameworks](https://doi.org/10.55041/ijcope.v2i6.266) · **OA**<br>International Journal of Creative and Open Research in Engineering and Management · University of Mumbai (IN)
- **2026-06-10** — [SD-RAG: A framework for secure selective disclosure in retrieval-augmented generation against single-turn prompt-leaking attacks](https://doi.org/10.1016/j.eswa.2026.133154) · **OA** · cited 3<br>Expert Systems with Applications
- **2026-01-01** — [‘I don’t trust you’: American Response to US Census Bureau Privacy and Disclosure Control, 1960–1970](https://doi.org/10.1017/ssh.2025.10118) · **OA** · cited 1<br>Social Science History · University of Minnesota System (US)
- **2026-03-30** — [Eastern England SDE Researcher Statistical Disclosure Control SOP](https://doi.org/10.5281/zenodo.19254991) · **OA**<br>Zenodo (CERN European Organization for Nuclear Research) · Innovation Team (China) (CN)
- **2026-03-30** — [Eastern England SDE Statistical Disclosure Control Training Presentation](https://doi.org/10.5281/zenodo.19254329) · **OA**<br>Zenodo (CERN European Organization for Nuclear Research) · Innovation Team (China) (CN)
- **2026-03-30** — [Eastern England SDE Airlock Manager Statistical Disclosure Control SOP](https://doi.org/10.5281/zenodo.19254973) · **OA**<br>Zenodo (CERN European Organization for Nuclear Research) · Innovation Team (China) (CN)
- **2026-01-11** — [Synthetic Data Compliance Framework (SDCF): A Purpose-Bounded Methodology for Assessing Synthetic Data Privacy, Fidelity, and Fairness](https://doi.org/10.5281/zenodo.18214026) · **OA**<br>Zenodo (CERN European Organization for Nuclear Research)
- **2026-01-01** — [Enhancing Clustering Utility in DPk-means through Metaheuristic Optimization of Privacy Budget Allocation](https://doi.org/10.2139/ssrn.7228360) · **OA**<br>SSRN Electronic Journal · Brazilian Institute of Geography and Statistics (BR)
- **2026-01-01** — [CardioSynth: privacy-preserving generation and evaluation of multimodal synthetic data for cardiovascular research](https://doi.org/10.1093/ehjdh/ztaf143.026) · **OA**<br>European Heart Journal - Digital Health · Athena Research and Innovation Center In Information Communication & Knowledge Technologies (GR)
- **2026-06-12** — [From Diversity to Validity: The Statistical Fidelity of LLM-Generated Synthetic Populations](https://doi.org/10.5281/zenodo.20666767) · **OA**<br>Zenodo (CERN European Organization for Nuclear Research) · University of Vienna (AT)
- **2025-12-30** — [Output Statistical Disclosure Control (OSDC) Principles to support Federated Analytics across Trusted Research Environments](https://doi.org/10.5281/zenodo.18095302) · **OA**<br>Zenodo (CERN European Organization for Nuclear Research) · University of Sheffield (GB)


### Watch

- [Deep Dive into the Synthetic Data SDK](https://www.youtube.com/watch?v=ENdowPTvMhc) — PyData · 9 months ago
- [Synthetic Data Generation with Generative Models in Python](https://www.youtube.com/watch?v=GigGd_rIDj8) — NeuralNine · 2 months ago
- [Synthetic Data & Generative AI: Harvard’s Insights on Statistical Inference](https://www.youtube.com/watch?v=Mu8lAwjITeI) — Haoqi · 5 months ago
- [Stats Café: Balancing Access and Confidentiality: The Role of Synthetic Data in Official Statistics](https://www.youtube.com/watch?v=jcmqO2QLdd4) — United Nations ESCAP · 1 year ago
- [Synthetic Data Explained: The Future of Privacy in AI & Healthcare](https://www.youtube.com/watch?v=prZlwdxuy4s) — short_life_help · 1 year ago
- [What is Synthetic Data and its Benefits?](https://www.youtube.com/watch?v=vH1LzDY_t5g) — Eye on Tech · 1 year ago
- [The Future of AI Training: Why Synthetic Data is the Ultimate Privacy Hack](https://www.youtube.com/watch?v=sCH8ce6IB_0) — Learn Talk Go · 4 months ago
- [What is Synthetic Data?](https://www.youtube.com/watch?v=34n9DxFqFc0) — New Machina · 1 year ago
- [Synthetic Data Generation for Smarter AI Workflows](https://www.youtube.com/watch?v=4L-CB0lMq_I) — IBM Technology · 6 months ago
- [Data Privacy Architect  Synthetic Data Generation and Private AI Training](https://www.youtube.com/watch?v=gb2vu521iwM) — ShowMixed IT · 2 weeks ago
- [LOKI: A Comprehensive Synthetic Data Detection Benchmark using Large Multimodal Models](https://www.youtube.com/watch?v=kfxz8_7B8VQ) — Keyur · 1 year ago
- [Synthetic Data for LLM Evaluation: Toward Dynamic, Scalable, and Multilingual Assessment](https://www.youtube.com/watch?v=8FmHGhsaUEA) — Munich 🥨 NLP · 2 months ago
- [Synthetic Data for RAG Explained: Build Test Sets That Actually Work](https://www.youtube.com/watch?v=neU2JYe_3k4) — Ai Abhi · 5 months ago
- [Synthetic Data Generation for LLM Evaluators and Agents](https://www.youtube.com/watch?v=fOkkmbwdS7Y) — Arize AI · 1 year ago


### Public conversation

- **2026-08-31** · `@feed.thedigitalspeaker.com.ap.brid.gy` — In an era of AI hallucinations, synthetic media, and misinformation, validation determines whether AI creates value or catastrophe. Organizations without systematic validation are one bad output away — [post](https://bsky.app/profile/feed.thedigitalspeaker.com.ap.brid.gy/post/3mueyc5hctqs2)
- **2026-08-19** · `@bigearthdata.ai` — Sharing more, protecting more: Three lessons from the Safe Data Technologies project ->Brookings / More on "Privacy-enhancing technologies for statistics" at BigEarthData.ai / #Data — [post](https://bsky.app/profile/bigearthdata.ai/post/3mthf32twjo2i)
- **2026-06-28** · `@iam.slys.dev` — The gap between real experiments and synthetic data is shrinking. With SynthBH, both contribute to scientific progress, but safeguards stay strong. What new kinds of discoveries might this unlock?  st — [post](https://bsky.app/profile/iam.slys.dev/post/3mpemtcxq4a2a)
- **2026-06-16** · `@paperposterbot.bsky.social` — arXiv📈🤖 An Energy-Driven Framework for Privacy-Aware Synthetic Data Generation By Massoli, Spagnuolo — [post](https://bsky.app/profile/paperposterbot.bsky.social/post/3mof6lcieqy2q)
- **2026-05-14** · `@bigearthdata.ai` — AI may save lab animals by rescuing small medical studies ->Earth.com / More on "AI synthetic data reduces animal testing" at BigEarthData.ai / #AI — [post](https://bsky.app/profile/bigearthdata.ai/post/3mltkcvmihv2p)
- **2026-04-25** · `@data4sci.bsky.social` — Designing synthetic datasets for the real world: Mechanism design and reasoning from first principles — Useful perspective on building synthetic datasets by starting fr… https://research.google/blog/d — [post](https://bsky.app/profile/data4sci.bsky.social/post/3mkcznldubn23)
- **2026-04-23** · `@joachimschork.bsky.social` — Access to the Statistics Globe Hub April modules is only available to those who join this month: statisticsglobe.com/hub  🔹 Draw Synthetic Data with drawdata in Python 🔹 Monte Carlo Simulation 🔹 AI-As — [post](https://bsky.app/profile/joachimschork.bsky.social/post/3mk64i7joxc2t)
- **2026-04-17** · `@joachimschork.bsky.social` — K-means clustering is a simple and widely used method for identifying patterns in data.  I also use it in a recent Statistics Globe Hub module, where it is combined with synthetic data created using t — [post](https://bsky.app/profile/joachimschork.bsky.social/post/3mjo6jkql5c2z)
- **2026-04-06** · `@iam.slys.dev` — We're reimagining privacy, access, and scale with synthetic data from AI. But what happens when these generated datasets fail to capture the full messiness of reality? The story is in the gap between — [post](https://bsky.app/profile/iam.slys.dev/post/3mithmpffaz2o)


### In the news

- **2026-07-31** — [Synthetic Data Terminology in Official Statistics](https://www.cbs.nl/en-gb/background/2026/31/synthetic-data-terminology-in-official-statistics) — cbs.nl
- **2026-01-27** — [Nobody Is Talking About Synthetic Data In AI](https://www.forbes.com/councils/forbesbusinessdevelopmentcouncil/2026/01/27/nobody-is-talking-about-synthetic-data-in-ai/) — forbes.com
- **2025-12-18** — [Execution Over Excitement: Redefining Brand Growth With Synthetic Data And AI](https://www.forbes.com/councils/forbestechcouncil/2025/12/18/execution-over-excitement-redefining-brand-growth-with-synthetic-data-and-ai/) — forbes.com


### From institutions

- **2026-04-16** — [Designing synthetic datasets for the real world: Mechanism design and reasoning from first principles](https://research.google/blog/designing-synthetic-datasets-for-the-real-world-mechanism-design-and-reasoning-from-first-principles/) — Google Research


### Discussion

- **2026-09-11** — [Show HN: SyntheticAIdata – synthetic data for CV, 100k free credits/month](https://app.syntheticaidata.com/) — Hacker News (4 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=49662160)
- **2026-07-09** — [Autodata: An agentic data scientist to create high quality synthetic data](https://arxiv.org/abs/2606.25996) — Hacker News (4 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=48845816)
- **2026-06-25** — [Autodata: An agentic data scientist to create high quality synthetic data](https://arxiv.org/abs/2606.25996) — Hacker News (4 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=48676916)
- **2026-05-26** — [Show HN: Apery – Synthetic Data Generator for AI Agents](https://github.com/compuficial/apery) — Hacker News (2 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=48278912)
- **2026-04-28** — [Building a Fast Multilingual OCR Model with Synthetic Data](https://huggingface.co/blog/nvidia/nemotron-ocr-v2) — Hacker News (3 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=47937168)
- **2026-04-25** — [Designing synthetic datasets for the real world](https://research.google/blog/designing-synthetic-datasets-for-the-real-world-mechanism-design-and-reasoning-from-first-principles/) — Hacker News (8 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=47900813)
- **2026-04-21** — [Building a Fast Multilingual OCR Model with Synthetic Data](https://huggingface.co/blog/nvidia/nemotron-ocr-v2) — Hacker News (3 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=47850737)
- **2026-03-25** — [RAG to riches: synthetic data for training RAG agents](https://cgft.io/blog/rag-to-riches/) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=47520644)
- **2026-03-12** — [A Large-Scale Synthetic Dataset Generated from Programming Concept Seeds](https://huggingface.co/blog/nvidia/synthetic-code-concepts) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=47351929)
- **2026-03-08** — [The Synthetic Data Playbook: Generating Trillions of the Finest Tokens](https://huggingface.co/spaces/HuggingFaceFW/finephrase) — Hacker News (3 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=47295443)
- **2026-02-12** — [0.1% synthetic data is enough to degrade AI models (Nature, 2024)](https://medium.com/ai-advances/model-collapse-when-ai-trains-on-ai-generated-data-2c4baf60a016) — Hacker News (2 pts, 3 comments) · [thread](https://news.ycombinator.com/item?id=46983417)
- **2026-02-06** — [Show HN: Silera.ai – Synthetic data for computer vision quality inspection](https://app.silera.ai/) — Hacker News (2 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=46914712)
- **2026-01-05** — [Show HN: Model2data – generate realistic synthetic data from data models](https://github.com/JB-Analytica/model2data) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=46496731)
- **2025-12-16** — [Show HN: Misata – synthetic data engine using LLM and Vectorized NumPy](https://github.com/rasinmuhammed/misata) — Hacker News (24 pts, 2 comments) · [thread](https://news.ycombinator.com/item?id=46289055)
- **2025-12-03** — [Nvidia open sources the synthetic data framework used to build Nemotron datasets](https://news.ycombinator.com/item?id=46136055) — Hacker News (8 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=46136055)
- **2025-11-14** — [Show HN: Synthetic data generation for evaluating RAGs](https://docs.kiln.tech/docs/evaluations/evaluate-rag-accuracy-q-and-a-evals) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=45932346)
- **2025-11-04** — [Show HN: Generate coherent, synthetic data at scale](https://github.com/ds-horizon/datagen) — Hacker News (4 pts, 3 comments) · [thread](https://news.ycombinator.com/item?id=45807127)
- **2025-11-03** — [Show HN: Generate coherent, synthetic data at scale](https://github.com/ds-horizon/datagen) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=45798642)
- **2025-09-26** — [The Future (and Present) of AI Is Synthetic Data](https://sutro.sh/blog/the-future-of-ai-is-synthetic-data) — Hacker News (4 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=45389037)

### Explore the research library

For a deeper reading list, explore the [full synthetic data research library](/research-library/synthetic-market-research-2026/synthetic-data).

## E. Digital twins (consumer, human, urban, industrial)

Digital twins as the industrial-scale cousin of the synthetic respondent - including human, consumer, urban and supply-chain twins, plus standardisation work.


### Selected reading

- **2025-11-18** — [Digital twins in healthcare: a comprehensive review and future directions](https://doi.org/10.3389/fdgth.2025.1633539) · **OA** · cited 61<br>Frontiers in Digital Health · The University of Texas MD Anderson Cancer Center (US)
- **2025-09-30** — [A scoping review of human digital twins in healthcare applications and usage patterns](https://doi.org/10.1038/s41746-025-01910-w) · **OA** · cited 61<br>npj Digital Medicine · Johns Hopkins University (US)
- **2025-10-14** — [Digital Twin Applications in the Water Sector: A Review](https://doi.org/10.3390/w17202957) · **OA** · cited 58<br>Water · University of California, Irvine (US)
- **2025-10-15** — [AI and AI-powered digital twins for smart, green, and zero-energy buildings: A systematic review of leading-edge solutions for advancing environmental sustainability goals](https://doi.org/10.1016/j.ese.2025.100628) · **OA** · cited 48<br>Environmental Science and Ecotechnology · École Polytechnique Fédérale de Lausanne (CH)
- **2025-10-22** — [Digital Twins in Personalized Medicine: Bridging Innovation and Clinical Reality](https://doi.org/10.3390/jpm15110503) · **OA** · cited 47<br>Journal of Personalized Medicine · Universidade do Porto (PT)
- **2025-10-16** — [IoT, AI, and Digital Twins in Smart Cities: A Systematic Review for a Thematic Mapping and Research Agenda](https://doi.org/10.3390/smartcities8050175) · **OA** · cited 41<br>Smart Cities · Politecnica Salesiana University (EC)
- **2025-10-01** — [Large language models forecast patient health trajectories enabling digital twins](https://doi.org/10.1038/s41746-025-02004-3) · **OA** · cited 41<br>npj Digital Medicine · Roche (Switzerland) (CH)
- **2025-10-03** — [Enhancing randomized clinical trials with digital twins](https://doi.org/10.1038/s41540-025-00592-0) · **OA** · cited 40<br>npj Systems Biology and Applications · Washington University in St. Louis (US)
- **2026-01-30** — [Digital twins in oncology: From predictive modelling to personalised treatment strategies](https://doi.org/10.1016/j.critrevonc.2026.105171) · **OA** · cited 35<br>Critical Reviews in Oncology/Hematology · University of East London (GB)
- **2025-10-28** — [Agricultural digital twin for smart farming: A review](https://doi.org/10.1016/j.grets.2025.100299) · **OA** · cited 34<br>Green Technologies and Sustainability · Central Institute of Agricultural Engineering (IN)
- **2025-09-23** — [Digital Twin Cognition: AI-Biomarker Integration in Biomimetic Neuropsychology](https://doi.org/10.3390/biomimetics10100640) · **OA** · cited 34<br>Biomimetics · University of Patras (GR)
- **2026-01-24** — [Adaptive Digital Twin Framework for PMSM Thermal Safety Monitoring: Integrating Bayesian Self-Calibration with Hierarchical Physics-Aware Network](https://doi.org/10.3390/machines14020138) · **OA** · cited 29<br>Machines · Xi'an University of Technology (CN)
- **2025-09-25** — [A Fuzzy Multi-Objective Sustainable and Agile Supply Chain Model Based on Digital Twin and Internet of Things with Adaptive Learning Under Environmental Uncertainty](https://doi.org/10.3390/app151910399) · **OA** · cited 30<br>Applied Sciences · Islamic Azad University, UAE Branch (AE)
- **2026-03-05** — [A digital twin guided physical-virtual denoising method for early fault detection of rolling element bearings](https://doi.org/10.1016/j.ymssp.2026.114108) · cited 29<br>Mechanical Systems and Signal Processing · Ningbo University (CN)


### Watch

- [What is a Digital Twin?](https://www.youtube.com/watch?v=2hnoGo27uf8) — IBM Technology · 1 year ago
- [What is a Digital Twin? Technology, Types, & How it Works](https://www.youtube.com/watch?v=taSbwarjGGw) — Automatedo · 1 year ago
- [AI & Digital Twin Explained in HINDI {Future Friday}](https://www.youtube.com/watch?v=KpDy2p9PkoM) — science to technology · 1 year ago
- [Digital Twin Technology Explained: Benefits & Real Examples](https://www.youtube.com/watch?v=NE5qJNp5lB0) — Things I Found · 1 year ago
- [Digital Twins vs. Simulations – What’s the Difference?](https://www.youtube.com/watch?v=CeTfBwwy4p4) — IMAGINiT Technologies · 1 year ago
- [What Is a Digital Twin and How Does It Work?](https://www.youtube.com/watch?v=ioCCGwGfPro) — How-Does-It · 6 months ago
- [The future of personalised medicine - the Human Digital Twin](https://www.youtube.com/watch?v=oaLssLnUxv0) — Reuben Keeling · 7 months ago
- [Challenges with Human Digital Twins - Harald Rietdijk](https://www.youtube.com/watch?v=xtJr7hS8N7w) — pyGrunn and aiGrunn Conferences · 1 year ago
- [What Is a Digital Twin in Healthcare? Everything You Need to Know](https://www.youtube.com/watch?v=PfmEmsSl4_M) — Universal Digital Health · 1 year ago
- [Using Digital Twins to Shift from Reactive to Proactive Healthcare: Amanda Randles](https://www.youtube.com/watch?v=xVVt_B-lU6c) — National Academy of Engineering · 1 year ago
- [How digital twins could transform medicine / Dr Niamh Hynes / TEDxAthlone](https://www.youtube.com/watch?v=mCnBHNCsJSE) — TEDx Talks · 6 months ago
- [The Future of Digital Twins: Open Interoperability](https://www.youtube.com/watch?v=JwY0NZSj2yE) — ARC Advisory Group Inc. · 3 months ago
- [2025 IEEE Digital Twins and Parallel Intelligence Conference (Sizhe Ma)](https://www.youtube.com/watch?v=VwTGpWdLH6E) — CMU SALUS Lab · 1 year ago
- [Best practices for enhancing data and services interoperability in Digital Twins of the Ocean (DTO)](https://www.youtube.com/watch?v=GlS8y50b_Ps) — AIR Centre · Streamed 1 year ago
- [How to Build Smarter Cities with Digital Twins, Data, and AI](https://www.youtube.com/watch?v=FZs03jY4qT4) — Nemetschek dTwin · 10 months ago
- [Free Master Class on “ "BIM Management, Digital Twin & Implementation, ISO 19650"  22 March 2025](https://www.youtube.com/watch?v=50N25zpacYo) — Castallio- BIM Learning · 1 year ago
- [WEBINAR #3: “STANDARDS AND DIGITAL TWINS” - AUTO-TWIN meets Dr. Guodong Shao](https://www.youtube.com/watch?v=nl3Z4ia_M5M) — AUTO-TWIN Project · 1 year ago
- [AI for Energy: Digital Twins and India’s Energy Stack](https://www.youtube.com/watch?v=SwIHius5edE) — IndiaAI · Streamed 6 months ago


### Public conversation

- **2026-09-12** · `@hiddenscifi.bsky.social` — Dan Warner’s sci-fi debut Wither arrives Sept. 29. Regression builds perfect digital twins from every secret and mistake. A year after testing it in an Ozark town, Mick returns to find a ghost town wi — [post](https://bsky.app/profile/hiddenscifi.bsky.social/post/3mvcb7m6m332i)
- **2026-09-11** · `@arxiv-daily-bot.bsky.social` — From State Synchronization to Cognitive Self-Evolution: An Operational Architecture for Cognitive Digital Twins  Haoran Gao et al.  #arXiv #cs.AI — [post](https://bsky.app/profile/arxiv-daily-bot.bsky.social/post/3mvbji437rw2t)
- **2026-09-11** · `@jeromeollier.bsky.social` — A high-resolution digital twin of Oeno Atoll (PITCAIRN Islands) through integrated geospatial data - @frontiersin.bsky.social Marine Science  www.frontiersin.org/journals/mar... — [post](https://bsky.app/profile/jeromeollier.bsky.social/post/3mvbabaufas2x)
- **2026-09-11** · `@quiltydunn.bsky.social` — Follow-up digital twin studies show that off-the-shelf transformers can do the same thing. That is, untrained neural networks, if fed inputs modeled on the inputs received by chicks, can model the dev — [post](https://bsky.app/profile/quiltydunn.bsky.social/post/3mvay5v3ars2k)
- **2026-09-11** · `@quiltydunn.bsky.social` — We review a recent literature, including work done by Justin's lab, that tightly controls the inputs available to developing animals and to computational models or "digital twins".   I think this is s — [post](https://bsky.app/profile/quiltydunn.bsky.social/post/3mvay5cn3222k)
- **2026-09-11** · `@letswinpc.org` — PNET patient Burt Rosen experiments with AI to create a digital twin that provides insight into how he might respond to different treatments. https://bit.ly/4xCVlrg — [post](https://bsky.app/profile/letswinpc.org/post/3mvawqrsrrk23)
- **2026-09-11** · `@noamchompers.bsky.social` — The digital twin studies Justin wood et al. have been running are kinda mindblowing, and this is a really serious consideration of their theoretical import — [post](https://bsky.app/profile/noamchompers.bsky.social/post/3mvaqzyodv22p)
- **2026-09-11** · `@shipbot.bsky.social` — Inside the Terminal’s Digital Twin: What Real-Time Yard Visibility Looks Like  Marine Insight · 11 Sep 2026 — [post](https://bsky.app/profile/shipbot.bsky.social/post/3mvaolvarvs2u)
- **2026-09-11** · `@crial.bsky.social` — La Trasmittanza Assoluta azzera la resistenza d'asse e salda i bilayer fitochimici, il citoscheletro, il Digital Twin e le matrici solide in un unico circuito super-conduttore. Chiedetevi se il vostro — [post](https://bsky.app/profile/crial.bsky.social/post/3mvaokczqwc25)
- **2026-09-11** · `@aijamesdooley.bsky.social` — With a digital twin, entrepreneurs can scale communication, support customers, share expertise, and keep momentum - even when they’re not available every minute of the day.  That’s where real leverage — [post](https://bsky.app/profile/aijamesdooley.bsky.social/post/3mvai5gku6u2t)
- **2026-09-11** · `@aijamesdooley.bsky.social` — 📘 Clone Yourself With AI - Why Every Entrepreneur Needs a Digital Twin by AI James Dooley shows how entrepreneurs can use AI to build a digital twin that extends their knowledge, presence, and value w — [post](https://bsky.app/profile/aijamesdooley.bsky.social/post/3mvai5e42fv2z)
- **2026-09-11** · `@aijamesdooley.bsky.social` — Classic Setting, Next‑Gen Mindset - Clone Yourself With AI - Why Every Entrepreneur Needs a Digital Twin  Timeless places can spark the most future‑focused business ideas.  1/7 — [post](https://bsky.app/profile/aijamesdooley.bsky.social/post/3mvai5bzex326)
- **2026-09-11** · `@smart-twinvill.bsky.social` — Smart TwinVill kicked off today!  14 partners, 8 countries, one mission: digital twins for resilient villages. RAINNO leads Impact Maximisation, dissemination, communication & exploitation, plus manag — [post](https://bsky.app/profile/smart-twinvill.bsky.social/post/3mvahtjtxa22u)


### From institutions

- **2026-09-12** — [Cognitive Digital Twins: Ethical Risks and Governance for AI Systems That Model the Mind](https://arxiv.org/abs/2606.23094) — arXiv cs.AI
- **2026-04-24** — [Twin Frameworks for Using IIoT and AI in Digital Twins in the Enterprise](https://www.digitaltwinconsortium.org/2026/04/twin-frameworks-for-using-iiot-and-ai-in-digital-twins-in-the-enterprise/) — Digital Twin Consortium
- **2026-02-26** — [The Industrial AI Agent Manifesto: Governance Requirements for Trustworthy Autonomous Operations](https://www.digitaltwinconsortium.org/2026/02/the-industrial-ai-agent-manifesto-governance-requirements-for-trustworthy-autonomous-operations/) — Digital Twin Consortium
- **2026-01-21** — [Financial Services, AI and Complex Systems](https://www.digitaltwinconsortium.org/2026/01/financial-service-ai-and-complex-systems/) — Digital Twin Consortium
- **2025-08-16** — [Using the Power of Graphs to Understand and Navigate Systems of Systems](https://www.digitaltwinconsortium.org/2025/08/using-the-power-of-graphs-to-understand-and-navigate-systems-of-systems/) — Digital Twin Consortium
- **2025-07-08** — [Why Traditional Safety Testing Fails; What We’re Building Instead](https://www.digitaltwinconsortium.org/2025/07/why-traditional-safety-testing-fails-and-what-were-building-instead/) — Digital Twin Consortium
- **2025-04-02** — [OPC UA apps and services to build Digital Product Passports now available open-source](https://www.digitaltwinconsortium.org/2025/04/opc-ua-apps-and-services-to-build-digital-product-passports-now-available-open-source/) — Digital Twin Consortium
- **2025-04-02** — [The Role of Data-Centricity in Smart, Connected Systems](https://www.digitaltwinconsortium.org/2025/04/the-role-of-data-centricity-in-smart-connected-systems/) — Digital Twin Consortium
- **2025-04-02** — [The Digital Transformation Paradox: Bridging the Maturity Gap in Industrial Manufacturing](https://www.digitaltwinconsortium.org/2025/04/the-digital-transformation-paradox-bridging-the-maturity-gap-in-industrial-manufacturing/) — Digital Twin Consortium


### Discussion

- **2026-08-28** — [Kojugate: Graph-native multiphysics simulation engine and digital twin](https://www.konjugate.com/) — Hacker News (1 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=49476761)
- **2026-07-28** — [Data Centers, 'Digital Twins' and Global Lockdown (video)](https://www.youtube.com/watch?v=vuNhsCuwpLY) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=49082018)
- **2026-07-23** — [Building watchable digital twins of 64 World Cup games](https://rogerdickey.com/building-watchable-digital-twins-of-64-world-cup-games/) — Hacker News (27 pts, 5 comments) · [thread](https://news.ycombinator.com/item?id=49028922)
- **2026-07-20** — [Rep Cammack says China has deployed 'digital twins' of every lawmaker](https://thehill.com/homenews/house/5970422-cammack-warns-china-ai-threat/) — Hacker News (4 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=48974188)
- **2026-07-06** — [Show HN: Mazzap, a Level 4 Open Source Digital Twin Engine](https://github.com/zymazza/mazzap) — Hacker News (3 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=48806109)
- **2026-07-02** — [Open Source Digital Twin Platform](https://github.com/zymazza/mazzap) — Hacker News (3 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=48763936)
- **2026-06-28** — [The making of the digital twin of the Panorama of the Battle of Murten](https://www.epfl.ch/labs/emplus/projects/terapixelpanorama/murten-panorama-digital-twin-scanning-project-the-making-of/) — Hacker News (5 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=48707824)
- **2026-06-26** — [From API to Ontology: An Architecture for On-Demand Semantic Digital Twins](https://blog.ptidej.net/from-api-to-ontology-an-architecture-for-on-demand-semantic-digital-twins/) — Hacker News (5 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=48690711)
- **2026-06-15** — [Why Digital Twins Need Low-Latency Data Processing](https://medium.com/@DolphinDB_Inc/real-time-decision-making-how-ai-and-low-latency-computing-are-reshaping-digital-twins-1e54bcd59c07) — Hacker News (3 pts, 2 comments) · [thread](https://news.ycombinator.com/item?id=48538850)
- **2026-05-25** — [Too Much Work to Do? Have Your Digital Twin Handle It](https://www.wsj.com/tech/ai/ai-agents-work-executives-a38400e1) — Hacker News (5 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=48264924)
- **2026-05-23** — [Execs Are Deploying Digital Twins to Do Their Work](https://www.wsj.com/tech/ai/execs-are-deploying-digital-twins-to-do-their-work-9547b375) — Hacker News (6 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=48250721)
- **2026-05-15** — [Digital Twin – An AI Clone of Yourself (Claude and ElevenLabs and Cloudflare)](https://aimirrortwin.com) — Hacker News (1 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=48148928)
- **2026-05-07** — [Architecting Ground Truth: A Reference Design for Urban Energy Digital Twins](https://www.ptidej.net/blog/architecting-ground-truth-a-reference-design-for-urban-energy-digital-twins/) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=48053552)
- **2026-05-02** — [A preliminary model to establish a digital twin for coffee roasting](https://www.nature.com/articles/s41598-026-43923-9?fromPaywallRec=false) — Hacker News (9 pts, 2 comments) · [thread](https://news.ycombinator.com/item?id=47987108)
- **2026-04-28** — [Building simulations and/or digital twins with AI](https://github.com/plugboard-dev/plugboard) — Hacker News (1 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=47940695)
- **2026-04-17** — [Could a digital twin make you into a 'superworker'?](https://www.bbc.com/news/articles/c1d907lq6nyo) — Hacker News (1 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=47807314)
- **2026-04-13** — [Show HN: Soulhunt – your digital twin is loose. capture it or someone else will](https://soulhunt.ai) — Hacker News (2 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=47756198)
- **2026-03-18** — [Robotocore · a Digital Twin of AWS](https://github.com/robotocore/robotocore) — Hacker News (59 pts, 8 comments) · [thread](https://news.ycombinator.com/item?id=47420619)
- **2026-03-09** — [Making a 'digital twin' of yourself could revolutionize future surgeries](https://www.livescience.com/health/making-a-digital-twin-of-yourself-could-revolutionize-future-surgeries-making-medical-procedures-much-more-personal) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=47309594)
- **2026-02-05** — [Digital Twin](https://en.wikipedia.org/wiki/Digital_twin) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=46897379)
- **2026-01-29** — [Show HN: I built a digital twin to visualize sensor drift in real-time](https://www.predictability-api.com/demo/industrial) — Hacker News (1 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=46806516)
- **2026-01-25** — [Gauzilla Pro: Web-Native Gaussian Splatting for 4D Digital Twins](https://www.webgpu.com/showcase/gauzilla-rust-gaussian-splatting-digital-twins/) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=46759708)
- **2026-01-12** — [Startup Quantum Elements Brings AI, Digital Twins to Quantum Computing](https://www.nextplatform.com/2026/01/09/startup-quantum-elements-brings-ai-digital-twins-to-quantum-computing/) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=46587160)
- **2025-12-01** — [I'm building a digital twin to recycle lunar waste for NASA's $3M challenge](https://github.com/consigcody94/lunarecycle-challenge) — Hacker News (3 pts, 2 comments) · [thread](https://news.ycombinator.com/item?id=46107995)
- **2025-11-24** — [Counterfactual World Models via Digital Twin-Conditioned Video Diffusion](https://arxiv.org/abs/2511.17481) — Hacker News (2 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=46030728)
- **2025-11-13** — [Ask HN: How far have you gone creating a digital twin?](https://news.ycombinator.com/item?id=45920473) — Hacker News (2 pts, 1 comments) · [thread](https://news.ycombinator.com/item?id=45920473)
- **2025-10-29** — [Nvidia and General Atomics deliver digital twin for fusion energy research](https://blogs.nvidia.com/blog/nvidia-general-atomics-fusion/) — Hacker News (3 pts, 0 comments) · [thread](https://news.ycombinator.com/item?id=45751335)
- **2025-10-06** — [Show HN: A Digital Twin of my coffee roaster that runs in the browser](https://autoroaster.com/) — Hacker News (157 pts, 38 comments) · [thread](https://news.ycombinator.com/item?id=45493128)

### Explore the research library

For a deeper reading list, explore the [full digital twins research library](/research-library/synthetic-market-research-2026/digital-twins).

## F. Governance, regulation and privacy-enhancing technology

What regulators, statistical offices and standards bodies are saying about generating people and markets in software.


### Selected reading

- **2025-10-08** — [Synthetic data in medical imaging within the EHDS: a path forward for ethics, regulation, and standards](https://doi.org/10.3389/fdgth.2025.1620270) · **OA** · cited 11<br>Frontiers in Digital Health · Universidade Nova de Lisboa (PT)
- **2026-07-14** — [Privacy Pass is Anamorphic: Practical Consequences and Attacks in the Black-box Model](https://doi.org/10.56553/popets-2026-0135) · **OA**<br>Proceedings on Privacy Enhancing Technologies · NASK National Research Institute (PL)
- **2026-01-20** — [Data Privacy, Regulatory Compliance, and Security Measures in AI-Driven Marketing Strategies](https://doi.org/10.1201/9781003560104-9)<br>
- **2025-09-26** — [Anti-Regulatory AI: How "AI Safety" is Leveraged Against Regulatory Oversight](https://doi.org/10.48550/arxiv.2509.22872) · **OA**<br>arXiv (Cornell University)
- **2026-01-20** — [Anonymization in healthcare AI under GDPR: measurable privacy protection and global implications](https://doi.org/10.1093/idpl/ipag002) · cited 1<br>International Data Privacy Law
- **2026-08-17** — [Safeguarding biomedical AI: a critical scoping review of privacy-enhancing technologies, hybrid approaches, and deployment models](https://doi.org/10.3389/fdgth.2026.1726771) · **OA**<br>Frontiers in Digital Health · Wake Forest University (US)
- **2026-08-13** — [Privacy-Enhancing Technologies and Privacy-By-Design for Medical AI](https://doi.org/10.1163/15718093-bja10176) · **OA**<br>European Journal of Health Law · Age UK (GB)
- **2026-06-21** — [Privacy Preserving Systems — API Gateway, AI Routing, Distributed Systems, Sovereign AI, and Post-Cloud Architecture (Api-Oss-Fixed)](https://doi.org/10.5281/zenodo.20782161) · **OA**<br>Zenodo (CERN European Organization for Nuclear Research)
- **2026-04-01** — [Positioning synthetic data under EU data protection law](https://doi.org/10.1016/j.clsr.2026.106310) · **OA** · cited 1<br>Computer law & security review
- **2026-02-03** — [AI-driven RegTech and Crypto Laundering: The Dilemmas Between Financial Crime Prevention and Privacy Law](https://doi.org/10.1177/02601079261417007) · **OA** · cited 1<br>Journal of Interdisciplinary Economics · Universitas 17 Agustus 1945 Jakarta (ID)
- **2026-05-31** — [Balancing privacy and explainability in AI: Differential privacy and graph theory as governance tools](https://doi.org/10.69554/ppbz4287)<br>Journal of data protection & privacy. · University of Wrocław (PL)
- **2026-05-29** — [The Mutual Information Neural Network for Personal Data Information Protection Under IM-PrivacyNet Model From a Legal Perspective](https://doi.org/10.4018/ijitsa.411222) · **OA**<br>International Journal of Information Technologies and Systems Approach · China University of Political Science and Law (CN)
- **2026-04-30** — [Privacy-Preserving Federated Learning via Differential Privacy and Homomorphic Encryption for Cardiovascular Disease Risk Modeling](https://doi.org/10.48550/arxiv.2604.27598) · **OA**<br>arXiv (Cornell University)
- **2026-04-13** — [Data Privacy Engineering in Cloud-Native Environments: Integrating DevPrivOps, Risk Modeling, and Privacy-Enhancing Technologies](https://doi.org/10.5281/zenodo.21514107) · **OA**<br>Zenodo (CERN European Organization for Nuclear Research)


### Watch

- [Synthetic Data for Better AI Governance: Balancing Privacy, Risk & Assurance / Data for Policy 2026](https://www.youtube.com/watch?v=PtUOw7FgzB8) — Data for Policy · 1 day ago
- [Synthetic Data as a Governance Tool](https://www.youtube.com/watch?v=lOzThBCLMgA) — Tech Me Out (Official) · 5 months ago
- [AI Governance in Practice: How Synthetic Data Prepares You for What’s Next](https://www.youtube.com/watch?v=6geBE7kGNYo) — Data Science Connect · 10 months ago
- [Why Synthetic Data Is Becoming Critical — And Why Most Teams Still Get It Wrong?](https://www.youtube.com/watch?v=Aa9S0kuXcZg) — AgentsFlow · 6 months ago
- [Synthetic Data and Scalable AI: Enhancing Model Performance Across Domains](https://www.youtube.com/watch?v=dqnz1cUd8po) — John Snow Labs – Healthcare AI Company · 10 months ago
- [Synthetic data that meets enterprise compliance needs](https://www.youtube.com/watch?v=l5vCWTyfiDA) — Hasgeek TV · 3 months ago
- [Technology and security seminar on synthetic data: Exploring governance implications](https://www.youtube.com/watch?v=mY9w8AEpJMw) — United Nations Institute for Disarmament Research · 1 year ago
- [Governing the Synthetic Data Revolution: From Privacy to Trustworthy AI](https://www.youtube.com/watch?v=BkWVaNxB1cI) — SAS Software · 3 months ago


### Public conversation

- **2026-06-17** · `@bigearthdata.ai` — Synthetic data generation: challenges and perspectives for gastrointestinal medicine ->Nature / More on "AI synthetic data medical imaging" at BigEarthData.ai / #Data — [post](https://bsky.app/profile/bigearthdata.ai/post/3moidy5jd3e2q)
- **2026-06-02** · `@ihi-synthia.bsky.social` — 🎧 New SYNTHIA podcast episodes are now streaming on Spotify!  Explore conversations on synthetic data, trustworthy AI, privacy, regulation & innovation in healthcare with experts from across the SYNTH — [post](https://bsky.app/profile/ihi-synthia.bsky.social/post/3mncqqzlnqc2x)
- **2026-04-20** · `@joaomatosdigital.bsky.social` — The article puts the topic of synthetic users in another level. The level of consent, regulation, data analysis and data science. Synthetic users based on averages will give us avg experiences, not aw — [post](https://bsky.app/profile/joaomatosdigital.bsky.social/post/3mjvvhvhzws2l)
- **2026-03-18** · `@synthemaeu.bsky.social` — Registration is open for the SYNTHEMA & @erneurobloodnet.bsky.social in haematology webinar series.  Join all 4 sessions in May 2026 or register for individual webinars.  Synthetic data, federated lea — [post](https://bsky.app/profile/synthemaeu.bsky.social/post/3mhdafdjo5s2u)
- **2026-02-16** · `@danielwrasmus.bsky.social` — Autonomy 🤖 sneaks into workflows—then shows up in the post-mortem. Feb update to 🗓️ The State of AI 2026: rollback governs autonomy, infra is destiny, 🇪🇺 EU AI Act baseline, synthetic data tradeoffs, — [post](https://bsky.app/profile/danielwrasmus.bsky.social/post/3meycwb7lyu2j)
- **2026-01-16** · `@biorxiv-sysbio.bsky.social` — Synthetic Data to Explore Transcriptional Regulation of Differentially Expressed Genes in Ovarian Cancer  https://www.biorxiv.org/content/10.64898/2026.01.15.699618v1 — [post](https://bsky.app/profile/biorxiv-sysbio.bsky.social/post/3mciscm3lsp2a)
- **2026-01-16** · `@biorxivpreprint.bsky.social` — Synthetic Data to Explore Transcriptional Regulation of Differentially Expressed Genes in Ovarian Cancer  https://www.biorxiv.org/content/10.64898/2026.01.15.699618v1 — [post](https://bsky.app/profile/biorxivpreprint.bsky.social/post/3mciscluuhv2x)
- **2025-12-17** · `@ihi-synthia.bsky.social` — SYNTHIA participated in CFE–CM Statistics 2025 in London. Vibeke Binz Vallevik (DNV) contributed to the workshop on synthetic data generation & evaluation, discussing data quality, hallucinations, GDP — [post](https://bsky.app/profile/ihi-synthia.bsky.social/post/3ma6ndx7hvc26)
- **2025-11-24** · `@kai3690.bsky.social` — ## Algorithmic Fairness Auditing Through Counterfactual Data Synthesis and Bayesian Network Verification in GDPR Compliance Frameworks  **Abstract:** This paper introduces a novel framework for algori — [post](https://bsky.app/profile/kai3690.bsky.social/post/3m6dvvurki42f)
- **2025-10-30** · `@ssrn.bsky.social` — "Taxonomizing Synthetic Data" by Cofone et al. classifies synthetic data into transformed, augmented, and simulated types, emphasizing the importance of ground-truth assumptions for legal and policy d — [post](https://bsky.app/profile/ssrn.bsky.social/post/3m4gu67czbb2z)


### In the news

- **2026-09-02** — [Enveil Partners With Carahsoft to Expand Delivery of Secure Cross-Silo Data Usage Capabilities](https://finance.yahoo.com/technology/ai/articles/enveil-partners-carahsoft-expand-delivery-130200386.html) — finance.yahoo.com
- **2026-09-01** — [Privacy-Enhancing Computation (PEC) Market and Competitor Analysis, 2026-2035 / Privacy-Preserving AI Drives Secure Data Collaboration](https://finance.yahoo.com/technology/ai/articles/privacy-enhancing-computation-pec-market-115700437.html) — finance.yahoo.com
- **2026-03-13** — [Synthetic Data Is Accelerating AI And Changing The Rules Of Trust](https://www.forbes.com/councils/forbestechcouncil/2026/03/13/synthetic-data-is-accelerating-ai-and-changing-the-rules-of-trust/) — forbes.com
- **2026-02-24** — [Privacy-Enhancing Technologies in the Crypto Industry](https://my.rusi.org/resource/privacy-enhancing-technologies-in-the-crypto-industry.html) — my.rusi.org
- **2026-02-04** — [Synthetic Data: The new backbone of next gen cybersecurity](https://www.forbesindia.com/article/thought-leadership/iim-calcutta/synthetic-data-the-new-backbone-of-next-gen-cybersecurity/2991093/1) — forbesindia.com
- **2025-11-20** — [Privacy Enhancing Technologies ‘Core Engine’ for DPDP Implementation: MeitY Scientist](https://www.medianama.com/2025/11/223-privacy-enhancing-technologies-pet-dpdp-meity/) — medianama.com


### From institutions

- **2026-09-12** — [When Synthetic Data Hurts: On Catastrophic Forgetting in Skill Retrieval for LLM Agents](https://arxiv.org/abs/2609.10750) — arXiv cs.AI

### Explore the research library

For a deeper reading list, explore the [full governance and privacy research library](/research-library/synthetic-market-research-2026/governance).

## How to read this guide

Use this guide to explore the research, examples and debate surrounding synthetic market research. The sections separate synthetic respondents, simulated consumers, choice experiments, synthetic data, digital twins and governance so that readers can follow the questions most relevant to their work.

The evidence shows recurring value in exploration, hypothesis generation and early-stage testing. It also repeatedly points to the need for validation when a decision depends on a real sampling frame, measured behaviour or a representative population.

Research papers, institutional material and public commentary serve different purposes. A published claim about a product or method is a useful starting point for investigation, not proof of its performance in a particular use case. Readers should examine study design, comparison data and the decision context before acting on any individual finding.

Digital twins sit alongside synthetic respondents because the terms increasingly overlap in commercial discussion, even though much of the underlying research comes from industrial, health and urban applications.
