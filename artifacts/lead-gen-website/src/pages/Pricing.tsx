import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import CTABanner from "@/components/home/CTABanner";

const tiers = [
  {
    name: "Starter",
    volume: "Up to 500 leads",
    price: "[PRICE_PLACEHOLDER]",
    cta: "Get Started",
    popular: false,
    color: "#1E2130",
    features: [
      "1 lead type per order",
      "Skip traced (phone + email)",
      "Clean Excel/CSV delivery",
      "2–4 business day delivery",
      "Email support",
    ],
  },
  {
    name: "Professional",
    volume: "500–2,000 leads",
    price: "[PRICE_PLACEHOLDER]",
    cta: "Get Started",
    popular: true,
    color: "#C8A96E",
    features: [
      "Up to 3 lead types",
      "Skip traced (phone + email)",
      "Clean Excel/CSV delivery",
      "Priority 48-hour delivery",
      "ROI consultation included",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise",
    volume: "2,000+ leads",
    price: "Contact Us",
    cta: "Contact Us",
    popular: false,
    color: "#1E2130",
    features: [
      "All lead types available",
      "Skip traced (phone + email)",
      "Clean Excel/CSV delivery",
      "Custom turnaround time",
      "Dedicated account manager",
      "Cold calling add-on available",
      "Volume discount pricing",
    ],
  },
];

export default function Pricing() {
  return (
    <>
      <section className="bg-[#0A0A0F] pt-32 pb-20 dot-grid-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-4 font-mono-data">Pricing</p>
            <h1 className="hero-title text-white mb-6">Simple, Transparent <span className="text-[#C8A96E]">Pricing</span></h1>
            <p className="text-[#9CA3AF] text-base max-w-xl mx-auto">
              No hidden fees. No recycled data. Every order is fresh, verified, and delivered on time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`rounded-2xl overflow-hidden border-2 relative ${
                  tier.popular ? "border-[#C8A96E] shadow-2xl scale-105" : "border-[#E5E7EB]"
                }`}
                data-testid={`pricing-${tier.name.toLowerCase()}`}
              >
                {tier.popular && (
                  <div className="bg-[#C8A96E] text-[#0A0A0F] text-xs font-bold text-center py-2 uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${tier.popular ? "bg-[#0A0A0F]" : "bg-white"}`}>
                  <h3 className={`text-xl font-display font-bold mb-1 ${tier.popular ? "text-white" : "text-[#0A0A0F]"}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-6 ${tier.popular ? "text-[#9CA3AF]" : "text-[#6B7280]"}`}>{tier.volume}</p>
                  <div className="mb-8">
                    <span className={`font-mono-data text-3xl font-bold ${tier.popular ? "text-[#C8A96E]" : "text-[#0A0A0F]"}`}>
                      {tier.price}
                    </span>
                    {tier.price !== "Contact Us" && (
                      <span className={`text-sm ml-2 ${tier.popular ? "text-[#6B7280]" : "text-[#9CA3AF]"}`}>/ order</span>
                    )}
                  </div>
                  <ul className="flex flex-col gap-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <CheckCircle size={14} className="text-[#C8A96E] flex-shrink-0" />
                        <span className={`text-sm ${tier.popular ? "text-[#9CA3AF]" : "text-[#374151]"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <button
                      className={`w-full py-3 rounded-xl text-sm font-bold transition-all inline-flex items-center justify-center gap-2 ${
                        tier.popular
                          ? "bg-[#C8A96E] text-[#0A0A0F] hover:bg-[#d4b87e]"
                          : "border-2 border-[#C8A96E] text-[#C8A96E] hover:bg-[#C8A96E] hover:text-[#0A0A0F]"
                      }`}
                      data-testid={`pricing-cta-${tier.name.toLowerCase()}`}
                    >
                      {tier.cta} <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-sm text-[#9CA3AF] mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            All prices marked [PRICE_PLACEHOLDER] are pending finalization. Contact us for current pricing.
          </motion.p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
