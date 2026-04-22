import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Users, TrendingUp, Home } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";

interface RelatedLead {
  name: string;
  href: string;
}

interface LeadTypePageProps {
  leadType: string;
  tagline: string;
  description: string;
  whyValuable: string[];
  whoShouldBuy: string[];
  processSteps: string[];
  relatedLeads: RelatedLead[];
}

const sampleRows = [
  { name: "J*** S******", address: "1** Oak Street", city: "Columbus", state: "OH", phone: "(614) ***-****", email: "j***@***.com" },
  { name: "M*** W******", address: "4** Elm Avenue", city: "Phoenix", state: "AZ", phone: "(602) ***-****", email: "m***@***.com" },
  { name: "R*** J******", address: "7** Pine Road", city: "Dallas", state: "TX", phone: "(214) ***-****", email: "r***@***.com" },
];

export default function LeadTypePage({
  leadType, tagline, description, whyValuable, whoShouldBuy, processSteps, relatedLeads,
}: LeadTypePageProps) {
  return (
    <>
      <section className="bg-[#0A0A0F] pt-32 pb-20 dot-grid-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-4 font-mono-data">Real Estate Leads</p>
            <h1 className="hero-title text-white mb-4">{leadType}</h1>
            <p className="text-xl text-[#C8A96E] font-display font-semibold mb-6">{tagline}</p>
            <p className="text-[#9CA3AF] text-base max-w-2xl mx-auto">{description}</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="section-title text-[#0A0A0F] mb-10 text-center">Why These Leads Are Valuable</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyValuable.map((point, i) => (
                <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-6">
                  <CheckCircle size={20} className="text-[#C8A96E] mb-4" />
                  <p className="text-sm text-[#374151]">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0A0A0F] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-white mb-10 text-center">Who Should Buy These Leads</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {whoShouldBuy.map((who, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-dark p-5 text-center"
              >
                <Users size={20} className="text-[#C8A96E] mx-auto mb-2" />
                <p className="text-sm font-semibold text-white">{who}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-[#0A0A0F] mb-8 text-center">Sample Data Preview</h2>
          <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
            <div className="bg-[#C8A96E]/10 border-b border-[#C8A96E]/30 px-4 py-2">
              <span className="text-xs font-mono-data text-[#C8A96E] uppercase tracking-widest">SAMPLE — Data redacted for privacy</span>
            </div>
            <table className="min-w-full text-sm">
              <thead className="bg-[#0A0A0F]">
                <tr>
                  {["Owner Name","Property Address","City","State","Phone","Email"].map(h => (
                    <th key={h} className="px-4 py-3 text-left text-xs text-[#9CA3AF] uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sampleRows.map((row, i) => (
                  <tr key={i} className="border-t border-[#E5E7EB] blur-[2px]">
                    <td className="px-4 py-3 font-mono-data text-xs text-[#0A0A0F]">{row.name}</td>
                    <td className="px-4 py-3 text-xs text-[#374151]">{row.address}</td>
                    <td className="px-4 py-3 text-xs text-[#374151]">{row.city}</td>
                    <td className="px-4 py-3 text-xs font-mono-data">{row.state}</td>
                    <td className="px-4 py-3 font-mono-data text-xs text-[#374151]">{row.phone}</td>
                    <td className="px-4 py-3 text-xs text-[#374151]">{row.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0F1117] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-white mb-10 text-center">How We Source These Leads</h2>
          <div className="flex flex-col gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 card-dark p-5"
              >
                <div className="w-8 h-8 rounded-full border border-[#C8A96E] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-mono-data text-[#C8A96E] font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-sm text-[#9CA3AF] pt-1">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <TrendingUp size={32} className="text-[#C8A96E] mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold text-[#0A0A0F] mb-4">Ready to Get {leadType}?</h2>
          <p className="text-[#6B7280] text-sm mb-8">Fresh, verified leads delivered in 2–4 business days.</p>
          <Link href="/contact">
            <button className="bg-[#C8A96E] text-[#0A0A0F] font-bold px-8 py-4 rounded-xl hover:bg-[#d4b87e] transition-colors text-sm inline-flex items-center gap-2">
              Get {leadType} <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      <section className="bg-[#0A0A0F] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-display font-bold text-white mb-8 text-center">Related Lead Types</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedLeads.map((rl) => (
              <Link key={rl.href} href={rl.href}>
                <div className="card-dark p-5 gold-glow-hover cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Home size={18} className="text-[#C8A96E]" />
                    <span className="text-sm font-semibold text-white">{rl.name}</span>
                  </div>
                  <ArrowRight size={14} className="text-[#C8A96E]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
