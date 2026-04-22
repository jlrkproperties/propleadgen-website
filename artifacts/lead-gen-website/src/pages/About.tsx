import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CTABanner from "@/components/home/CTABanner";
import { CheckCircle, Shield, Globe, Users } from "lucide-react";

const stats = [
  { value: 10000, suffix: "+", label: "Leads Delivered" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "", label: "States Covered" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true);
        let s = 0;
        const interval = setInterval(() => {
          s += value / 100;
          if (s >= value) { setCount(value); clearInterval(interval); }
          else setCount(Math.floor(s));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, started]);

  return <span ref={ref} className="font-mono-data text-4xl font-bold text-[#C8A96E]">{count.toLocaleString()}{suffix}</span>;
}

const teamMembers = [
  { name: "[FOUNDER_NAME]", role: "Founder & CEO", bio: "Veteran real estate data specialist with over a decade of experience sourcing verified leads for US investors and wholesalers." },
  { name: "Data Research Lead", role: "Senior Data Analyst", bio: "Leads our manual verification team, ensuring every record meets our strict accuracy standards before delivery." },
  { name: "Skip Trace Specialist", role: "Contact Data Expert", bio: "Specialist in locating current contact information for property owners across all 50 states." },
];

export default function About() {
  return (
    <>
      <section className="bg-[#0A0A0F] pt-32 pb-20 dot-grid-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-4 font-mono-data">About Us</p>
            <h1 className="hero-title text-white mb-6">The Firm Behind <span className="text-[#C8A96E]">The Data</span></h1>
            <p className="text-[#9CA3AF] text-base max-w-2xl mx-auto">
              We exist because quality data is rare. We built [BRAND_NAME] to solve that — one verified record at a time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="section-title text-[#0A0A0F] mb-5">Our Story</h2>
              <p className="text-[#374151] text-sm leading-relaxed mb-4">
                [BRAND_NAME] was founded with a single mission: to give US real estate professionals access to the kind of data that actually closes deals. After years of watching investors and wholesalers waste money on recycled lists and AI-generated garbage, we built something different.
              </p>
              <p className="text-[#374151] text-sm leading-relaxed mb-4">
                Every order we receive is treated as a fresh engagement. We access official US county websites and government records — the same sources public data originates from — and manually review every record before it ever reaches your inbox.
              </p>
              <p className="text-[#374151] text-sm leading-relaxed">
                Today, we serve hundreds of clients across all 50 states, delivering verified leads that convert.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: CheckCircle, title: "Manual Verification", desc: "Every record reviewed by a human" },
                  { icon: Shield, title: "Official Sources", desc: "County and government records only" },
                  { icon: Globe, title: "National Coverage", desc: "All 50 US states" },
                  { icon: Users, title: "500+ Clients", desc: "Investors, agents, wholesalers" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="bg-[#F8F9FA] rounded-xl p-5">
                      <Icon size={20} className="text-[#C8A96E] mb-3" />
                      <p className="text-sm font-bold text-[#0A0A0F]">{item.title}</p>
                      <p className="text-xs text-[#6B7280] mt-1">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F1117] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title text-white">Our Mission</h2>
          </motion.div>
          <motion.div className="card-dark p-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-display text-2xl font-bold text-[#C8A96E] mb-4">&ldquo;Accuracy Over Volume.&rdquo;</p>
            <p className="text-[#9CA3AF] text-sm max-w-2xl mx-auto leading-relaxed">
              We refuse to compete on price by cutting corners. Our mission is to deliver the most accurate, freshest, and most actionable lead data available — sourced manually from official government records — so that every dollar our clients invest generates real results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="section-title text-[#0A0A0F] mb-4">Why Manual Verification Matters</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "The Problem With AI-Generated Lists",
                body: "AI and automated scrapers produce lists at scale — but accuracy is their achilles heel. Wrong phone numbers, deceased owners, already-sold properties, and recycled data from months or years ago are endemic. Every bad record wastes your time and money.",
              },
              {
                title: "The Manual Difference",
                body: "When a human reviews every record against the original county source, accuracy improves dramatically. We catch the errors automation misses: outdated ownership, pending sales, incorrect addresses. The result is data you can act on immediately.",
              },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="border border-[#E5E7EB] rounded-2xl p-7">
                <h3 className="text-base font-bold text-[#0A0A0F] mb-3">{item.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0F] py-16 dot-grid-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-white text-center mb-12">Our Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="text-xs text-[#6B7280] uppercase tracking-widest mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-[#0A0A0F] text-center mb-12">Meet The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#C8A96E]/20 border-2 border-[#C8A96E] mx-auto flex items-center justify-center mb-4">
                  <Users size={24} className="text-[#C8A96E]" />
                </div>
                <h3 className="text-sm font-bold text-[#0A0A0F]">{m.name}</h3>
                <p className="text-xs text-[#C8A96E] font-medium mt-1 mb-3">{m.role}</p>
                <p className="text-xs text-[#6B7280] leading-relaxed">{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
