import LeadTypePage from "./LeadTypePage";

export default function FixAndFlipLeads() {
  return (
    <LeadTypePage
      leadType="Fix & Flip Leads"
      tagline="Undervalued properties. High ROI for experienced investors."
      description="Fix & flip leads identify distressed properties with significant value-add potential — undervalued assets where renovation can generate substantial returns for experienced investors and flippers."
      whyValuable={[
        "Properties are identified based on condition indicators and assessed value gaps — meaning real upside potential.",
        "Owners of deteriorating properties are often motivated to sell quickly rather than invest in repairs.",
        "Our data includes properties with above-average days on market, foreclosure risk, and deferred maintenance signals.",
      ]}
      whoShouldBuy={["Fix & Flip Investors", "Real Estate Investors", "Contractors", "Cash Buyers"]}
      processSteps={[
        "We source properties flagged for code violations, delinquent permits, and distressed condition indicators from county records.",
        "Each property is cross-referenced with tax assessment data to estimate the equity gap.",
        "Our team filters for owner-occupied vs. investment properties to target the most motivated sellers.",
        "Skip tracing provides direct owner contact information.",
        "Delivered as clean Excel/CSV in 2–4 business days.",
      ]}
      relatedLeads={[
        { name: "Tax Delinquent Leads", href: "/real-estate-leads/tax-delinquent" },
        { name: "Eviction Leads", href: "/real-estate-leads/eviction" },
        { name: "Distressed Homeowners", href: "/real-estate-leads/distressed-homeowners" },
      ]}
    />
  );
}
