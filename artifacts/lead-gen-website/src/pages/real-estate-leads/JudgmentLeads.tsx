import LeadTypePage from "./LeadTypePage";

export default function JudgmentLeads() {
  return (
    <LeadTypePage
      leadType="Judgment Leads"
      tagline="Financially distressed. High motivation to sell below market."
      description="Judgment leads identify property owners who have legal judgments filed against them — creating financial pressure that often motivates quick property sales to satisfy debts before additional legal action occurs."
      whyValuable={[
        "Legal judgments create immediate financial pressure, making owners highly motivated to liquidate real estate assets quickly.",
        "Owners facing judgments often accept below-market offers to prevent wage garnishments, liens, or further legal action.",
        "These situations are time-sensitive — early contact gives you maximum negotiating leverage.",
      ]}
      whoShouldBuy={["Real Estate Investors", "Wholesalers", "Cash Buyers", "Real Estate Attorneys"]}
      processSteps={[
        "We access county court judgment records to identify property owners with active financial judgments.",
        "Records are cross-referenced with property ownership data to identify real estate assets at risk.",
        "Our team filters for judgment amounts and property equity to prioritize the most motivated sellers.",
        "Skip tracing appends current phone numbers and email addresses.",
        "Delivered as clean Excel/CSV in 2–4 business days.",
      ]}
      relatedLeads={[
        { name: "Tax Delinquent Leads", href: "/real-estate-leads/tax-delinquent" },
        { name: "Distressed Homeowners", href: "/real-estate-leads/distressed-homeowners" },
        { name: "Divorce Leads", href: "/real-estate-leads/divorce" },
      ]}
    />
  );
}
