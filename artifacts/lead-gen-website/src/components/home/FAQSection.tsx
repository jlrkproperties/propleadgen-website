import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How fresh is your data?",
    a: "All data is pulled fresh at the time of your order from official county websites and government records. We do not maintain or sell pre-existing lists. Every order starts a new research engagement.",
  },
  {
    q: "How do you verify leads?",
    a: "Every record is manually reviewed by our team. We cross-reference county records, verify property ownership, and check contact information before delivery. No bots, no AI — human eyes on every record.",
  },
  {
    q: "What format is the data delivered in?",
    a: "All leads are delivered as clean Excel (.xlsx) and CSV files, ready to import into your CRM or dialing platform. Column headers are standardized and clearly labeled.",
  },
  {
    q: "How long does delivery take?",
    a: "Standard delivery is 2–4 business days. Professional tier clients receive priority 48-hour delivery. We'll confirm the timeline when you place your order.",
  },
  {
    q: "Do you offer refunds if data is inaccurate?",
    a: "Yes. We stand behind our data. If verified records are found to be inaccurate, we replace them at no additional cost. Client satisfaction is our priority.",
  },
  {
    q: "What states do you cover?",
    a: "We cover all 50 US states. Availability at the county level varies — contact us for specific county availability. We're adding new counties regularly.",
  },
  {
    q: "Can I request a custom lead type?",
    a: "Absolutely. We work with clients to source custom lead types based on their investment criteria and target markets. Contact us to discuss your specific requirements.",
  },
  {
    q: "What is skip tracing and is it included?",
    a: "Skip tracing is the process of finding current contact information (phone numbers and emails) for property owners. It is included with all lead orders at no additional charge.",
  },
  {
    q: "What's the difference between probate and pre-probate leads?",
    a: "Probate leads come from estates currently in the probate process. Pre-probate leads are sourced earlier — when a death is recorded but before probate officially begins — giving you a significant competitive advantage with less competition.",
  },
  {
    q: "Do you offer bulk pricing?",
    a: "Yes. Enterprise clients ordering 2,000+ leads receive custom pricing. Contact us to discuss volume discounts and dedicated account management.",
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
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        data-testid={`faq-${index}`}
      >
        <span className="text-sm font-semibold text-[#0A0A0F] pr-4">{q}</span>
        <ChevronDown
          size={16}
          className={`text-[#C8A96E] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-5 pt-0">
              <p className="text-sm text-[#6B7280] leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-3 font-mono-data">FAQ</p>
          <h2 className="section-title text-[#0A0A0F]">Frequently Asked Questions</h2>
        </motion.div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
