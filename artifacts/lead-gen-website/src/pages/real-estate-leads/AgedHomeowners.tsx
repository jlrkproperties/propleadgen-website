import LeadTypePage from "./LeadTypePage";

export default function AgedHomeowners() {
  return (
    <LeadTypePage
      leadType="Aged Homeowners"
      tagline="High-equity homes. Owners open to downsizing."
      description="Aged homeowner leads target long-term property owners — typically seniors who have significant equity built up over decades and are considering downsizing, moving to assisted living, or liquidating assets for retirement."
      whyValuable={[
        "Long-term homeowners often have paid off their mortgage entirely — massive equity and no urgency for top dollar.",
        "Seniors moving to assisted living or relocating to be closer to family need to sell quickly and cleanly.",
        "These properties are often well-maintained and located in established neighborhoods with strong resale value.",
      ]}
      whoShouldBuy={["Real Estate Investors", "Cash Buyers", "Wholesalers", "Senior Housing Advisors"]}
      processSteps={[
        "We identify long-term property owners through county deed transfer records — properties held 15+ years with no mortgage activity.",
        "Records are cross-referenced with age demographic data and assessed property values.",
        "Our team prioritizes free-and-clear properties in established residential areas.",
        "Skip tracing locates current phone and email for each owner.",
        "Delivered as clean Excel/CSV in 2–4 business days.",
      ]}
      relatedLeads={[
        { name: "Inheritance Leads", href: "/real-estate-leads/inheritance" },
        { name: "Probate Leads", href: "/real-estate-leads/probate" },
        { name: "Pre-Probate Leads", href: "/real-estate-leads/pre-probate" },
      ]}
    />
  );
}
