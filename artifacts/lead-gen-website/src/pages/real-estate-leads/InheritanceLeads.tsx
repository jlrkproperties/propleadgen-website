import LeadTypePage from "./LeadTypePage";

export default function InheritanceLeads() {
  return (
    <LeadTypePage
      leadType="Inheritance Leads"
      tagline="Out-of-state heirs. No mortgage. Willing to negotiate."
      description="Inheritance leads target property owners who have inherited real estate — often out-of-state heirs who have no interest in managing a property and are motivated to convert the asset to cash quickly."
      whyValuable={[
        "Out-of-state heirs don't want to manage, maintain, or pay taxes on a property they didn't choose to own.",
        "Inherited properties frequently carry no mortgage — enabling fast, clean cash transactions.",
        "Heirs are motivated to close quickly and will often accept below-market offers to avoid hassle.",
      ]}
      whoShouldBuy={["Real Estate Investors", "Wholesalers", "Cash Buyers", "Fix & Flip Investors"]}
      processSteps={[
        "We source inheritance leads from county deed transfers recorded after a death event.",
        "Each record is cross-referenced with death records to confirm the transfer was inheritance-based.",
        "Out-of-state heir records are prioritized — they are typically the most motivated to sell.",
        "Skip tracing locates current contact information for the new property owner.",
        "Delivered as clean Excel/CSV in 2–4 business days.",
      ]}
      relatedLeads={[
        { name: "Probate Leads", href: "/real-estate-leads/probate" },
        { name: "Pre-Probate Leads", href: "/real-estate-leads/pre-probate" },
        { name: "Aged Homeowners", href: "/real-estate-leads/aged-homeowners" },
      ]}
    />
  );
}
