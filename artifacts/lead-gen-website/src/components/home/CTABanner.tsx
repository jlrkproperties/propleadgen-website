import { motion } from "framer-motion";
import { Link } from "wouter";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const waMessage = encodeURIComponent(
    "Hi, I'm interested in your lead services. Can you help me?"
  );

  return (
    <section className="bg-[#0A0A0F] py-24 border-y border-[#1E2130]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-[#C8A96E]" />
            <span className="text-xs font-mono-data uppercase tracking-widest text-[#C8A96E]">
              Ready to Scale
            </span>
            <div className="h-px w-12 bg-[#C8A96E]" />
          </div>

          <h2 className="section-title text-white mb-5">
            Ready to Find Your Next Deal?
          </h2>
          <p className="text-[#9CA3AF] text-base mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop wasting time on bad data. Get verified, motivated seller leads
            delivered to your inbox in 2–4 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button
                className="flex items-center gap-2 bg-[#C8A96E] text-[#0A0A0F] font-bold px-8 py-4 rounded-xl hover:bg-[#d4b87e] transition-all text-sm"
                data-testid="cta-banner-order"
              >
                Order Now <ArrowRight size={16} />
              </button>
            </Link>
            <a
              href={`https://wa.me/WA_NUMBER_1_PLACEHOLDER?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#1da851] transition-all text-sm"
              data-testid="cta-banner-whatsapp"
            >
              <FaWhatsapp size={18} /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
