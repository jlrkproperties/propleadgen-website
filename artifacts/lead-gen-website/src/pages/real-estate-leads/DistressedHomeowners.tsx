import LeadTypePage from "./LeadTypePage";

export default function DistressedHomeowners() {
  return (
    <LeadTypePage
      leadType="Distressed Homeowners"
      tagline="Behind on mortgage. Urgent need to sell."
      description="Distressed homeowner leads identify property owners who are behind on their mortgage payments and facing potential foreclosure — homeowners who need to sell quickly to avoid losing everything."
      whyValuable={[
        "Homeowners facing foreclosure are under extreme time pressure and highly motivated to accept cash offers.",
        "These sellers often need to close in days or weeks, not months — ideal for cash buyers and wholesalers.",
        "Early intervention before foreclosure benefits both the buyer and the seller — preserving credit and equity.",
      ]}
      whoShouldBuy={["Real Estate Investors", "Wholesalers", "Cash Buyers", "Real Estate Agents"]}
      processSteps={[
        "We monitor county lis pendens (foreclosure notice) filings and NOD (Notice of Default) records.",
        "Records are filtered to identify homeowners in the early and mid stages of default — before auction.",
        "Property values are cross-referenced to estimate equity available for negotiation.",
        "Skip tracing provides direct contact information for homeowners.",
        "Delivered as clean Excel/CSV in 2–4 business days.",
      ]}
      relatedLeads={[
        { name: "Tax Delinquent Leads", href: "/real-estate-leads/tax-delinquent" },
        { name: "Judgment Leads", href: "/real-estate-leads/judgment" },
        { name: "Fix & Flip Leads", href: "/real-estate-leads/fix-and-flip" },
      ]}
    />
  );
}
