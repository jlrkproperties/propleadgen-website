import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";

const faqs = [
  {
    q: "How fresh is your data?",
    a: "All data is pulled fresh at the time of your order from official county websites and government records. We do not maintain or sell pre-existing lists. Every order starts a new research engagement specifically for you. This means you receive the most current data available from primary sources.",
  },
  {
    q: "How do you verify leads?",
    a: "Every record is manually reviewed by our team. We cross-reference county records, verify property ownership, and check contact information before delivery. No bots, no AI — a human sets eyes on every record. This includes ownership verification, address confirmation, and cross-checking against our quality benchmarks.",
  },
  {
    q: "What format is the data delivered in?",
    a: "All leads are delivered as clean Excel (.xlsx) and CSV files, ready to import into your CRM or dialing platform. Column headers are standardized and clearly labeled. If you require a specific CRM format, contact us and we'll accommodate where possible.",
  },
  {
    q: "How long does delivery take?",
    a: "Standard delivery is 2–4 business days from order placement. Professional tier clients receive priority 48-hour delivery. We'll confirm the exact timeline when you place your order. Rush orders may be accommodated for an additional fee — contact us to discuss.",
  },
  {
    q: "Do you offer refunds if data is inaccurate?",
    a: "Yes. We stand behind our data quality guarantee. If verified records are found to be inaccurate — wrong address, disconnected number, or incorrect ownership — we replace them at no additional cost. We ask that you report issues within 7 days of delivery so we can investigate and replace promptly.",
  },
  {
    q: "What states do you cover?",
    a: "We cover all 50 US states. Availability at the county level varies — some counties are more accessible than others due to public record access restrictions. Contact us with your target area and we'll confirm county-level availability before you place an order.",
  },
  {
    q: "Can I request a custom lead type?",
    a: "Absolutely. We work with clients regularly to source custom lead types based on specific investment criteria, market conditions, or business needs. If you have a specific niche — such as absentee landlords in a particular ZIP code, or commercial property owners — contact us to discuss feasibility.",
  },
  {
    q: "What is skip tracing and is it included?",
    a: "Skip tracing is the process of locating current contact information — phone numbers and email addresses — for property owners. It is included with all lead orders at no additional charge. We use verified data sources to ensure the contact information appended to each record is current and accurate.",
  },
  {
    q: "What's the difference between probate and pre-probate leads?",
    a: "Probate leads come from estates currently in the active probate legal process — the property is already listed in court records. Pre-probate leads are sourced earlier, when a death is recorded but before probate officially begins. Pre-probate gives you a significant competitive advantage — you're contacting heirs weeks before the data becomes publicly available and before competitors have a chance to reach out.",
  },
  {
    q: "Do you offer bulk pricing?",
    a: "Yes. Enterprise clients ordering 2,000+ leads receive custom pricing with significant volume discounts. Dedicated account management, priority turnaround, and cold calling add-ons are also available for high-volume clients. Contact us directly to discuss your volume requirements and we'll provide a custom quote.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="border border-[#E5E7EB] rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[#F8F9FA] transition-colors"
        data-testid={`faq-item-${index}`}
      >
        <span className="text-sm font-semibold text-[#0A0A0F] pr-6">{q}</span>
        <ChevronDown size={16} className={`text-[#C8A96E] flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 pb-6 pt-0 bg-white">
              <p className="text-sm text-[#6B7280] leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <>
      <section className="bg-[#0A0A0F] pt-32 pb-20 dot-grid-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-4 font-mono-data">FAQ</p>
            <h1 className="hero-title text-white mb-6">Your Questions, <span className="text-[#C8A96E]">Answered</span></h1>
            <p className="text-[#9CA3AF] text-base">
              Everything you need to know about our data, our process, and how we work.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
