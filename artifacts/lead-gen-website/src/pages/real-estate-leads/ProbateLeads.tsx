import LeadTypePage from "./LeadTypePage";

export default function ProbateLeads() {
  return (
    <LeadTypePage
      leadType="Probate Leads"
      tagline="Heirs motivated to sell quickly. Often mortgage-free."
      description="Probate leads are property owners whose estates are currently in the legal probate process. These heirs are often motivated to liquidate assets quickly, and many properties are mortgage-free — making them ideal acquisition targets for investors."
      whyValuable={[
        "Heirs frequently have no emotional attachment to the property and want to liquidate quickly, giving you negotiating power.",
        "Many probate properties carry no mortgage, enabling below-market cash transactions that close fast.",
        "Probate is a public legal process — our team monitors county court filings to identify motivated sellers before anyone else contacts them.",
      ]}
      whoShouldBuy={["Real Estate Investors", "Wholesalers", "Cash Buyers", "Property Attorneys"]}
      processSteps={[
        "We monitor US county probate court filings in real time to identify newly opened estates.",
        "Each filing is cross-referenced to verify property ownership and confirm the estate includes real property.",
        "Our team manually reviews every record, filtering out already-closed cases and non-residential properties.",
        "Skip tracing is performed to append current phone numbers and email addresses for heirs and estate executors.",
        "Clean data is delivered in Excel/CSV format within 2–4 business days.",
      ]}
      relatedLeads={[
        { name: "Pre-Probate Leads", href: "/real-estate-leads/pre-probate" },
        { name: "Inheritance Leads", href: "/real-estate-leads/inheritance" },
        { name: "Distressed Homeowners", href: "/real-estate-leads/distressed-homeowners" },
      ]}
    />
  );
}
