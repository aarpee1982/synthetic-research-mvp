export const researchNotes: Record<string, { title: string; description: string; body: string[]; sources?: { title: string; url: string }[] }> = {
  "ai-market-research-future": {
    title: "How to check whether AI research is useful",
    description: "Start with a real question, then compare the AI's answer with evidence from customers.",
    body: [
      "An AI answer can sound convincing. That doesn't tell you whether it will help your business. Start with something you can check: which message worked better, why customers cancelled, or what people chose when prices changed.",
      "For example, take a completed customer study. Keep some answers aside and ask the tool to predict them without seeing them first. Compare the results. Does it get the main pattern right? Does it miss a customer group that matters to you?",
      "This is called a holdout test. It gives you a clearer basis for judging the tool than a fluent conversation alone. Agree on the test before looking at the answer, and make sure the provider hasn't already used those answers to set up the model.",
      "Use what you learn to choose the next step. The tool may help you narrow a list of ideas or spot questions for a follow-up interview. Match the job you give it to what the test actually showed."
    ]
  },
  "glp1-obesity-cost-global-analysis": {
    title: "Weight-loss medicines: the questions a market study should ask",
    description: "Interest is one part of demand. Access, cost and continued use need separate answers.",
    body: [
      "A new treatment's approval is an important event. It doesn't answer every business question about its use. The FDA approved Zepbound for chronic weight management in specified adults in November 2023. A market study still needs to ask who can get treatment, who pays, and how use changes over time. [1]",
      "Separate those questions. Being interested in a medicine is different from receiving a prescription, filling it, and continuing treatment. Ask people about the steps they've actually taken, rather than treating interest as a sale.",
      "Be just as specific about cost. Are you studying what patients pay themselves, what an insurer pays, or what a health system spends? Those are different measures. Pick one and state the country and time period before comparing figures.",
      "If you're exploring a possible change in coverage or price, build it into the research question. For example: how might access change under these two payment arrangements? Compare the answers with relevant records and interviews. A useful study follows the path from interest to use, one step at a time."
    ],
    sources: [{ title: "FDA: November 2023 Zepbound approval", url: "https://www.fda.gov/news-events/press-announcements/fda-approves-new-medication-chronic-weight-management" }]
  },
  "the-say-do-gap-ai-research": {
    title: "Why 'I'd buy that' isn't the same as a sale",
    description: "Ask about the last purchase, not just the next one.",
    body: [
      "Imagine someone tells you they'd pay more for a better product. Then they reach the checkout, see a discount on their usual brand, and buy that instead. They weren't necessarily misleading you. The real choice included details your question left out.",
      "Researchers call this the say-do gap: the difference between what people say they will do and what they actually do. A useful way to explore it is to ask about a recent purchase. What did they compare? What did they spend? Why did they choose that option?",
      "Then ask about the new idea in a similar setting. Put a price on it. Show the alternatives. Include the option to buy nothing. You get a more useful question than simply asking whether someone likes an idea.",
      "The same applies when you use an AI audience. Give it the real choice, not just the product description. Check its answers against customer behaviour before using them to plan sales."
    ]
  },
  "why-stated-preference-research-can-misread-launch-demand": {
    title: "Will people buy your new product? Ask a better question.",
    description: "A launch test needs a price, alternatives, and a reason to switch.",
    body: [
      "'Do you like this idea?' is an easy question to answer. 'Would you buy it instead of what you use now, at this price?' asks something much closer to the decision a customer will face.",
      "Imagine testing a new subscription. Show the monthly price, what it includes, and the service a customer would give up. Include keeping their current plan as a choice. Otherwise, you might learn that the idea sounds appealing without learning whether anyone would switch.",
      "Ask about timing too. Someone might want the product but have no reason to change today. A contract, a setup cost, or the effort of learning something new could affect the decision.",
      "Use an early test to decide what deserves more work. Then compare the result with a small real-world trial when possible. Keep the questions consistent across human and AI research so you know which choice each result describes."
    ]
  }
};
