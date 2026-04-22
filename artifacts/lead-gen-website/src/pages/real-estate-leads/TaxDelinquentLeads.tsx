import LeadTypePage from "./LeadTypePage";

export default function TaxDelinquentLeads() {
  return (
    <LeadTypePage
      leadType="Tax Delinquent Leads"
      tagline="Owners facing liens. Ready to sell before auction."
      description="Tax delinquent leads identify property owners who are behind on property taxes and facing potential tax lien sales or government auctions — creating powerful motivation to sell quickly to a cash buyer."
      whyValuable={[
        "Owners facing tax liens risk losing their property to government auction — a cash offer is often their best escape route.",
        "These properties frequently have significant equity — the owner needs to sell, but not because they lack collateral.",
        "Time pressure from impending tax sales creates urgency that works in your favor as a buyer.",
      ]}
      whoShouldBuy={["Real Estate Investors", "Tax Lien Investors", "Cash Buyers", "Wholesalers"]}
      processSteps={[
        "We access county tax assessor and treasurer records to identify properties with delinquent tax status.",
        "Records are filtered by delinquency severity and proximity to auction dates.",
        "Property values and estimated equity are cross-referenced to prioritize high-opportunity leads.",
        "Skip tracing locates current owner contact information.",
        "Delivered as clean Excel/CSV in 2–4 business days.",
      ]}
      relatedLeads={[
        { name: "Judgment Leads", href: "/real-estate-leads/judgment" },
        { name: "Distressed Homeowners", href: "/real-estate-leads/distressed-homeowners" },
        { name: "Eviction Leads", href: "/real-estate-leads/eviction" },
      ]}
    />
  );
}
