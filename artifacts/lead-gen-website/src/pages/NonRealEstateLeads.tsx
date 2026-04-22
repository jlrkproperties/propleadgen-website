import { motion } from "framer-motion";
import { Shield, TrendingUp, RefreshCw, Building2, DollarSign, Search, BarChart, Home, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import CTABanner from "@/components/home/CTABanner";

const services = [
  {
    icon: Shield,
    name: "Insurance Leads",
    desc: "Property and homeowner insurance prospects verified and ready for agents to contact.",
    color: "#4A9EFF",
  },
  {
    icon: TrendingUp,
    name: "Mortgage Leads",
    desc: "Homeowners pre-qualified for mortgage consideration with verified contact information.",
    color: "#C8A96E",
  },
  {
    icon: RefreshCw,
    name: "Refinance Leads",
    desc: "Homeowners with equity who may benefit from refinancing their current mortgage rate.",
    color: "#4A9EFF",
  },
  {
    icon: Building2,
    name: "Property Management",
    desc: "Landlords and property owners seeking professional property management services.",
    color: "#C8A96E",
  },
  {
    icon: DollarSign,
    name: "Private Lenders",
    desc: "High-net-worth individuals and entities interested in private real estate lending.",
    color: "#4A9EFF",
  },
  {
    icon: Search,
    name: "Title Research",
    desc: "Property owners needing title research, clearance, or insurance services.",
    color: "#C8A96E",
  },
  {
    icon: BarChart,
    name: "Property Analysis",
    desc: "Investors and owners seeking professional property valuation and analysis services.",
    color: "#4A9EFF",
  },
  {
    icon: Home,
    name: "Custom Home Builders",
    desc: "Land owners and developers interested in custom home construction services.",
    color: "#C8A96E",
  },
];

export default function NonRealEstateLeads() {
  return (
    <>
      <section className="bg-[#0A0A0F] pt-32 pb-20 dot-grid-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-widest text-[#4A9EFF] mb-4 font-mono-data">Specialty Leads</p>
            <h1 className="hero-title text-white mb-6">
              Beyond Real Estate.{" "}
              <span className="text-[#4A9EFF]">Still Verified.</span>
            </h1>
            <p className="text-[#9CA3AF] text-base max-w-2xl mx-auto">
              Targeted prospect lists for insurance, mortgage, refinance, property management, private lenders, title research, and custom home builders — verified and ready to contact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#C8A96E] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  data-testid={`non-re-${svc.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${svc.color}15` }}>
                    <Icon size={22} style={{ color: svc.color }} />
                  </div>
                  <h3 className="text-sm font-bold text-[#0A0A0F] mb-2">{svc.name}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed mb-4">{svc.desc}</p>
                  <Link href="/contact">
                    <span className="text-xs text-[#C8A96E] flex items-center gap-1 font-semibold cursor-pointer hover:gap-2 transition-all">
                      Order Now <ArrowRight size={12} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0F1117] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { val: "100%", label: "Manually Verified" },
              { val: "Skip Traced", label: "Phone + Email Included" },
              { val: "2–4 Days", label: "Standard Delivery" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-mono-data text-3xl font-bold text-[#C8A96E] mb-2">{item.val}</p>
                <p className="text-sm text-[#6B7280]">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
