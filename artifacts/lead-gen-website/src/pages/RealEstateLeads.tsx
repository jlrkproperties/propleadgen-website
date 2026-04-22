import { motion } from "framer-motion";
import { Link } from "wouter";
import { Scale, Search, HeartCrack, AlertCircle, Home, FileText, DollarSign, Hammer, Building, Users, ArrowRight } from "lucide-react";
import CTABanner from "@/components/home/CTABanner";

const leadTypes = [
  { icon: Scale, name: "Probate Leads", desc: "Heirs motivated to sell quickly. Often mortgage-free properties.", href: "/real-estate-leads/probate" },
  { icon: Search, name: "Pre-Probate Leads", desc: "Early access before data goes public. Less competition.", href: "/real-estate-leads/pre-probate" },
  { icon: HeartCrack, name: "Divorce Leads", desc: "Sellers forced to liquidate. Motivated to accept fast offers.", href: "/real-estate-leads/divorce" },
  { icon: AlertCircle, name: "Eviction Leads", desc: "Tired landlords under pressure. Below-market deals.", href: "/real-estate-leads/eviction" },
  { icon: Home, name: "Inheritance Leads", desc: "Out-of-state heirs. No mortgage. Willing to negotiate.", href: "/real-estate-leads/inheritance" },
  { icon: FileText, name: "Judgment Leads", desc: "Financially distressed. High motivation to sell below market.", href: "/real-estate-leads/judgment" },
  { icon: DollarSign, name: "Tax Delinquent Leads", desc: "Owners facing liens. Ready to sell before auction.", href: "/real-estate-leads/tax-delinquent" },
  { icon: Hammer, name: "Fix & Flip Leads", desc: "Undervalued properties. High ROI for experienced investors.", href: "/real-estate-leads/fix-and-flip" },
  { icon: Building, name: "Distressed Homeowners", desc: "Behind on mortgage. Urgent need to sell.", href: "/real-estate-leads/distressed-homeowners" },
  { icon: Users, name: "Aged Homeowners", desc: "High-equity homes. Owners open to downsizing.", href: "/real-estate-leads/aged-homeowners" },
];

export default function RealEstateLeads() {
  return (
    <>
      <section className="bg-[#0A0A0F] pt-32 pb-20 dot-grid-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-4 font-mono-data">Real Estate Leads</p>
            <h1 className="hero-title text-white mb-6">Motivated Seller Leads <span className="text-[#C8A96E]">That Convert</span></h1>
            <p className="text-[#9CA3AF] text-base max-w-2xl mx-auto">
              Every lead type sourced directly from US county records. Manually verified. Skip-traced. Delivered in 2–4 days.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadTypes.map((lt, i) => {
              const Icon = lt.icon;
              return (
                <motion.div
                  key={lt.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link href={lt.href}>
                    <div className="border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#C8A96E] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full bg-white">
                      <div className="w-12 h-12 rounded-xl bg-[#C8A96E]/10 flex items-center justify-center mb-4">
                        <Icon size={22} className="text-[#C8A96E]" />
                      </div>
                      <h3 className="text-base font-bold text-[#0A0A0F] mb-2">{lt.name}</h3>
                      <p className="text-sm text-[#6B7280] mb-4">{lt.desc}</p>
                      <span className="text-sm text-[#C8A96E] flex items-center gap-1 font-semibold">
                        Learn More <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
