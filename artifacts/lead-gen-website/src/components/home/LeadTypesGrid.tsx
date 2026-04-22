import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Scale, Search, HeartCrack, Home, Building, FileText,
  DollarSign, Hammer, AlertCircle, Users, ArrowRight,
} from "lucide-react";

const leadTypes = [
  {
    icon: Scale,
    name: "Probate Leads",
    value: "Heirs motivated to sell quickly. Often mortgage-free.",
    href: "/real-estate-leads/probate",
  },
  {
    icon: Search,
    name: "Pre-Probate Leads",
    value: "Early access before data goes public. Less competition.",
    href: "/real-estate-leads/pre-probate",
  },
  {
    icon: HeartCrack,
    name: "Divorce Leads",
    value: "Sellers forced to liquidate. Motivated to accept fast offers.",
    href: "/real-estate-leads/divorce",
  },
  {
    icon: AlertCircle,
    name: "Eviction Leads",
    value: "Tired landlords under pressure. Below-market deals.",
    href: "/real-estate-leads/eviction",
  },
  {
    icon: Home,
    name: "Inheritance Leads",
    value: "Out-of-state heirs. No mortgage. Willing to negotiate.",
    href: "/real-estate-leads/inheritance",
  },
  {
    icon: FileText,
    name: "Judgment Leads",
    value: "Financially distressed. High motivation to sell below market.",
    href: "/real-estate-leads/judgment",
  },
  {
    icon: DollarSign,
    name: "Tax Delinquent",
    value: "Owners facing liens. Ready to sell before auction.",
    href: "/real-estate-leads/tax-delinquent",
  },
  {
    icon: Hammer,
    name: "Fix & Flip",
    value: "Undervalued properties. High ROI for experienced investors.",
    href: "/real-estate-leads/fix-and-flip",
  },
  {
    icon: Building,
    name: "Distressed Homeowners",
    value: "Behind on mortgage. Urgent need to sell.",
    href: "/real-estate-leads/distressed-homeowners",
  },
  {
    icon: Users,
    name: "Aged Homeowners",
    value: "High-equity homes. Owners open to downsizing.",
    href: "/real-estate-leads/aged-homeowners",
  },
];

export default function LeadTypesGrid() {
  return (
    <section className="bg-[#0F1117] py-24 dot-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-3 font-mono-data">Lead Categories</p>
          <h2 className="section-title text-white">Real Estate Lead Types</h2>
          <p className="mt-4 text-[#9CA3AF] max-w-xl mx-auto text-sm">
            Hand-picked from public records. Verified by humans. Built for investors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {leadTypes.map((lt, i) => {
            const Icon = lt.icon;
            return (
              <motion.div
                key={lt.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link href={lt.href}>
                  <div
                    className="card-dark cursor-pointer gold-glow-hover h-full"
                    style={{ padding: 28 }}
                    data-testid={`lead-type-${lt.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#C8A96E]/10 flex items-center justify-center" style={{ marginBottom: 14 }}>
                      <Icon size={20} className="text-[#C8A96E]" />
                    </div>
                    <h3 className="text-sm font-semibold text-white" style={{ marginBottom: 10 }}>{lt.name}</h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed" style={{ marginBottom: 16 }}>{lt.value}</p>
                    <span className="text-xs text-[#C8A96E] flex items-center gap-1 font-medium">
                      Learn More <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
