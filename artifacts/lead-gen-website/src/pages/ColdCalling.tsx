import { motion } from "framer-motion";
import { Phone, Target, Users, TrendingUp, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import CTABanner from "@/components/home/CTABanner";

const targets = [
  { icon: Users, label: "Real Estate Agents", desc: "Convert your lead lists into appointments with qualified seller consultations." },
  { icon: TrendingUp, label: "Investors & Wholesalers", desc: "We call your lists and warm up prospects before you close." },
  { icon: Target, label: "Cash Buyers", desc: "Targeted outreach to motivated sellers matching your buying criteria." },
  { icon: Phone, label: "Property Management", desc: "Reach landlords seeking professional property management services." },
  { icon: CheckCircle, label: "Insurance Companies", desc: "Outreach to homeowners and property owners for insurance quotes." },
];

const features = [
  "Trained US-focused calling team",
  "Custom scripts tailored to your service",
  "Real-time lead qualification and notes",
  "Voicemail drop included",
  "Daily activity reports",
  "CRM integration available",
  "No long-term contracts",
  "Pay per hour or per appointment",
];

export default function ColdCalling() {
  return (
    <>
      <section className="bg-[#0A0A0F] pt-32 pb-20 dot-grid-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-4 font-mono-data">Cold Calling Services</p>
            <h1 className="hero-title text-white mb-6">
              We Call.{" "}
              <span className="text-[#C8A96E]">You Close.</span>
            </h1>
            <p className="text-[#9CA3AF] text-base max-w-2xl mx-auto">
              Our trained team handles your outreach — making calls on your behalf, qualifying prospects, and delivering warm leads ready for you to close.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#C8A96E] text-[#0A0A0F] font-bold px-7 py-3.5 rounded-xl text-sm inline-flex items-center gap-2 hover:bg-[#d4b87e] transition-colors">
                  Get Started <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title text-[#0A0A0F]">Who We Call For</h2>
            <p className="mt-4 text-[#6B7280] text-sm">We tailor every calling campaign to your specific industry, goals, and target market.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targets.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#C8A96E] hover:shadow-lg transition-all"
                  data-testid={`cold-calling-${t.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#C8A96E]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#C8A96E]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0A0A0F] mb-2">{t.label}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{t.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0F] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="section-title text-white mb-6">What's Included</h2>
              <p className="text-[#9CA3AF] text-sm mb-8">Every cold calling campaign comes fully equipped — no add-ons, no surprise fees.</p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#22C55E] flex-shrink-0" />
                    <span className="text-sm text-[#9CA3AF]">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-dark p-8">
              <Clock size={28} className="text-[#C8A96E] mb-4" />
              <h3 className="text-xl font-display font-bold text-white mb-3">Typical Campaign Setup</h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Campaign brief and script review — Day 1",
                  "Team training and list preparation — Day 2",
                  "Calling begins — Day 3",
                  "First report delivered — End of week 1",
                  "Ongoing optimization and scaling",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                    <span className="font-mono-data text-[#C8A96E] text-xs font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
