import LeadTypePage from "./LeadTypePage";

export default function DivorceLeads() {
  return (
    <LeadTypePage
      leadType="Divorce Leads"
      tagline="Sellers forced to liquidate. Motivated to accept fast offers."
      description="Divorce leads identify property owners going through separation proceedings who are legally required to liquidate jointly held real estate. Their timeline is driven by court orders — making them highly motivated to close quickly."
      whyValuable={[
        "Court-ordered property sales create urgency — sellers can't delay and are motivated to close fast.",
        "Both parties often prefer a quick cash sale over a prolonged listing process during an already difficult time.",
        "Divorce properties are frequently priced below market to facilitate a faster sale and equitable division.",
      ]}
      whoShouldBuy={["Real Estate Investors", "Wholesalers", "Cash Buyers", "Real Estate Agents"]}
      processSteps={[
        "We access county family court filings to identify divorce cases involving real property.",
        "Records are filtered to properties where co-ownership is listed and liquidation is likely.",
        "Manual review ensures we capture active cases, not resolved or dismissed filings.",
        "Skip tracing adds current contact details for both parties on the property deed.",
        "Clean, verified data delivered in 2–4 business days.",
      ]}
      relatedLeads={[
        { name: "Judgment Leads", href: "/real-estate-leads/judgment" },
        { name: "Distressed Homeowners", href: "/real-estate-leads/distressed-homeowners" },
        { name: "Eviction Leads", href: "/real-estate-leads/eviction" },
      ]}
    />
  );
}
