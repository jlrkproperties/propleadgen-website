import { motion } from "framer-motion";
import { Link } from "wouter";
import { Building2, Briefcase, Phone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Real Estate Leads",
    description:
      "Probate, divorce, eviction, inheritance and more — sourced from official county records across the US.",
    cta: "Explore Lead Types",
    href: "/real-estate-leads",
    testId: "service-real-estate",
  },
  {
    icon: Briefcase,
    title: "Specialty Leads",
    description:
      "Targeted prospect lists for insurance, mortgage, refinance, property management, private lenders, title research, and custom home builders — verified and ready to contact.",
    cta: "Learn More",
    href: "/specialty-leads",
    testId: "service-non-real-estate",
  },
  {
    icon: Phone,
    title: "Cold Calling Services",
    description:
      "Our trained team handles your outreach — converting quality leads into real opportunities.",
    cta: "Learn More",
    href: "/cold-calling",
    testId: "service-cold-calling",
  },
];

const ICON_BOX = {
  background: "rgba(200,169,110,0.12)",
  border: "1px solid rgba(200,169,110,0.25)",
  borderRadius: 10,
};

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-3 font-mono-data">Our Services</p>
          <h2 className="section-title text-[#0A0A0F]">What We Offer</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-8 hover:border-[#C8A96E] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                data-testid={svc.testId}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6"
                  style={ICON_BOX}
                >
                  <Icon size={26} color="#C8A96E" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#0A0A0F] mb-3">{svc.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{svc.description}</p>
                <Link href={svc.href}>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8A96E] hover:gap-3 transition-all cursor-pointer"
                    data-testid={`${svc.testId}-link`}
                  >
                    {svc.cta} <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
