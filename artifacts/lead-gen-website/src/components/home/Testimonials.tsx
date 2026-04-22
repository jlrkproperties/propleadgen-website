import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The probate list we got was incredibly accurate. Every record checked out. Closed our first deal within 3 weeks.",
    name: "Michael T.",
    role: "Real Estate Investor",
    state: "Ohio",
    outcome: "Closed at 28% below market value",
  },
  {
    quote:
      "We've tried 4 other lead vendors. [BRAND_NAME] is the only one that actually verifies. No disconnected numbers, no wrong addresses.",
    name: "Sarah K.",
    role: "Wholesaler",
    state: "Texas",
    outcome: "12 deals closed in Q1",
  },
  {
    quote:
      "The cold calling team converted 3 leads into signed contracts in the first month. ROI was insane.",
    name: "David R.",
    role: "Real Estate Agent",
    state: "Florida",
    outcome: "$47,000 in commissions from one list",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0F1117] py-24 dot-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-3 font-mono-data">Testimonials</p>
          <h2 className="section-title text-white">What Our Clients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-dark p-7 flex flex-col justify-between"
              data-testid={`testimonial-${i}`}
            >
              <div>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-[#C8A96E] text-[#C8A96E]" />
                  ))}
                </div>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div>
                <div className="border-t border-[#1E2130] pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-[#6B7280]">
                    {t.role}, {t.state}
                  </p>
                  <p className="mt-2 text-xs italic text-[#C8A96E]">{t.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
