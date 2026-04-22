import LeadTypePage from "./LeadTypePage";

export default function EvictionLeads() {
  return (
    <LeadTypePage
      leadType="Eviction Leads"
      tagline="Tired landlords under pressure. Below-market deals."
      description="Eviction leads target landlords who have filed or received eviction notices — landlords who are often tired of property management headaches and willing to sell at favorable prices to exit quickly."
      whyValuable={[
        "Landlords facing evictions are often burned out and ready to exit real estate entirely — making them receptive to cash offers.",
        "Properties may be undervalued due to problem tenants, deferred maintenance, or vacancy income loss.",
        "These landlords often have equity built up and can accept below-market offers to avoid further losses.",
      ]}
      whoShouldBuy={["Real Estate Investors", "Wholesalers", "Property Managers", "Cash Buyers"]}
      processSteps={[
        "We access county court eviction filing records to identify landlords currently engaged in eviction proceedings.",
        "Records are filtered to property owners, not tenants, and cross-referenced with property ownership data.",
        "Our team manually reviews each case to identify motivated sellers with leverageable situations.",
        "Skip tracing appends direct contact information for the property owner.",
        "Delivered as clean Excel/CSV in 2–4 business days.",
      ]}
      relatedLeads={[
        { name: "Tax Delinquent Leads", href: "/real-estate-leads/tax-delinquent" },
        { name: "Distressed Homeowners", href: "/real-estate-leads/distressed-homeowners" },
        { name: "Fix & Flip Leads", href: "/real-estate-leads/fix-and-flip" },
      ]}
    />
  );
}
