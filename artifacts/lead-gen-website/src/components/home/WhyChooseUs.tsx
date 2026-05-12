import { motion } from "framer-motion";
import { BanIcon, BookOpen, RefreshCcw, PhoneCall, Clock, Target } from "lucide-react";

const features = [
  {
    icon: BanIcon,
    title: "No AI, No Bots",
    description: "Every record is manually verified by our expert team. We never use automated data scrapers.",
  },
  {
    icon: BookOpen,
    title: "Official Sources Only",
    description: "Data pulled directly from county websites and government records — always primary source.",
  },
  {
    icon: RefreshCcw,
    title: "Never Recycled",
    description: "Fresh work starts the moment you place your order. We don't resell old lists.",
  },
  {
    icon: PhoneCall,
    title: "Skip Tracing Included",
    description: "Phone numbers and emails appended to every lead — ready to contact immediately.",
  },
  {
    icon: Clock,
    title: "2–4 Day Delivery",
    description: "Clean Excel/CSV, ready to use. Priority 48-hour delivery available for Professional tier.",
  },
  {
    icon: Target,
    title: "ROI Guidance",
    description: "We advise on which lead types match your goals and budget — we're partners, not just vendors.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0A0A0F] py-24 dot-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-4 font-mono-data"> - Why Us</p>
            
            <p className="text-3xl font-display font-bold text-white mb-4 leading-tight">
              We don't sell lists.<br />
              <span className="text-[#C8A96E]">We deliver intelligence.</span>
            </p>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-lg">
              In a market flooded with recycled data and AI-generated garbage, we're the firm that does it the right way. Every order is a fresh engagement — we access official county records, manually review each record, append verified contact information, and deliver clean data you can act on immediately. No shortcuts. No exceptions.
            </p>
            <div className="mt-8">
              <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                <div className="h-px w-12 bg-[#C8A96E]" />
                <span className="font-mono-data text-xs tracking-widest uppercase text-[#6B7280]">
                  Trusted by 500+ professionals across the US
                </span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card-dark p-5 gold-glow-hover cursor-default"
                  data-testid={`feature-${f.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#C8A96E]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={17} className="text-[#C8A96E]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{f.title}</h4>
                      <p className="text-xs text-[#6B7280] leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
