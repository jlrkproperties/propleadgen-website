import LeadTypePage from "./LeadTypePage";

export default function PreProbateLeads() {
  return (
    <LeadTypePage
      leadType="Pre-Probate Leads"
      tagline="Early access before data goes public. Less competition."
      description="Pre-probate leads are sourced when a death is recorded but before the estate officially enters probate — giving you a critical head start before the data becomes widely available to competitors."
      whyValuable={[
        "You're contacting heirs weeks before competitors even know the property is potentially available.",
        "Less competition at this stage means more negotiating leverage and better pricing.",
        "Families are often overwhelmed and welcome a straightforward cash offer during this difficult time.",
      ]}
      whoShouldBuy={["Real Estate Investors", "Wholesalers", "Cash Buyers", "Estate Attorneys"]}
      processSteps={[
        "We monitor county death records and obituary databases to identify recent passings involving property owners.",
        "Each case is cross-referenced against property ownership records to confirm real estate assets.",
        "Our team manually reviews to filter for properties that match your criteria.",
        "Skip tracing locates next-of-kin and heirs with current contact information.",
        "Data delivered in 2–4 business days before the probate process begins.",
      ]}
      relatedLeads={[
        { name: "Probate Leads", href: "/real-estate-leads/probate" },
        { name: "Inheritance Leads", href: "/real-estate-leads/inheritance" },
        { name: "Aged Homeowners", href: "/real-estate-leads/aged-homeowners" },
      ]}
    />
  );
}
