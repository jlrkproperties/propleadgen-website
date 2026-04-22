import { motion } from "framer-motion";
import { ClipboardList, Database, UserCheck, Phone, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Share Your Requirements",
    description: "Tell us your target area, lead type, and volume. We tailor every order to your strategy.",
  },
  {
    number: "02",
    icon: Database,
    title: "We Pull Fresh County Data",
    description: "We access official US county websites and government records — no third-party databases.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Manual Review",
    description: "Every record is reviewed by a human. No bots. No AI. No recycled data from old lists.",
  },
  {
    number: "04",
    icon: Phone,
    title: "Skip Tracing",
    description: "Phone numbers and verified email addresses are appended to every lead.",
  },
  {
    number: "05",
    icon: Download,
    title: "Delivery",
    description: "Clean Excel/CSV file delivered to your inbox in 2–4 business days.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F8F9FA]" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-3 font-mono-data">How It Works</p>
          <h2 className="section-title text-[#0A0A0F]">Our Process</h2>
          <p className="mt-4 text-[#6B7280] max-w-xl mx-auto text-sm">
            Fresh data. Manual verification. Delivered in 2–4 days.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96E]/40 to-transparent" style={{ top: 45 }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="process-step group relative flex flex-col items-center text-center"
                  style={{ cursor: "default" }}
                  data-testid={`step-${step.number}`}
                >
                  <div
                    className="process-step__icon relative z-10 rounded-full bg-[#0A0A0F] border-2 border-[#C8A96E] flex items-center justify-center shadow-lg"
                    style={{
                      width: 90,
                      height: 90,
                      marginBottom: 20,
                      transition: "all 250ms ease",
                    }}
                  >
                    <Icon size={36} className="process-step__icon-svg text-[#C8A96E]" style={{ transition: "color 250ms ease" }} />
                  </div>
                  <span
                    className="process-step__number font-mono-data"
                    style={{ fontSize: 16, color: "#C8A96E", marginBottom: 8, transition: "color 250ms ease" }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="process-step__title text-[#0A0A0F]"
                    style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, transition: "color 250ms ease" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "#4B5563",
                      maxWidth: 180,
                    }}
                  >
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 z-20 items-center" style={{ top: 35 }}>
                      <ArrowRight size={20} style={{ color: "rgba(200, 169, 110, 0.60)" }} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
