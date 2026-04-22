import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroCityNightUrl from "@assets/pexels-NY-2_1776828167017.jpg";
import SampleRequestModal from "@/components/ui/SampleRequestModal";

const trustBadges = [
  "No AI · No Bots",
  "Manual Verification",
  "Fresh County Data",
  "2–4 Day Delivery",
];

export default function HeroSection() {
  const [sampleOpen, setSampleOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-start justify-center overflow-hidden bg-[#0A0A0F] pt-20"
      style={{ paddingTop: 160 }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={heroCityNightUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center 30%",
            transform: "scale(1.05)",
            filter: "brightness(1.05) contrast(1.1) saturate(1.05)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10, 10, 15, 0.40) 0%, rgba(10, 10, 15, 0.35) 40%, rgba(10, 10, 15, 0.75) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: "rgba(200, 169, 110, 0.06)",
            mixBlendMode: "screen",
          }}
        />

        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "180px",
            background: "linear-gradient(to bottom, transparent, #0A0A0F)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm font-mono-data uppercase tracking-[0.25em] text-[#C8A96E] mb-6">
            Verified &middot; Fresh &middot; Results-Driven
          </p>
        </motion.div>

        <motion.h1
          className="hero-title text-white mb-6 max-w-4xl mx-auto"
          style={{ textShadow: "0 2px 24px rgba(0,0,0,0.95), 0 0 40px rgba(0,0,0,0.6)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Find Motivated Sellers{" "}
          <span className="text-[#C8A96E]">Before Anyone Else Does.</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-[#F1F5F9] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ textShadow: "0 1px 16px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.7)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We source, verify, and deliver targeted lead lists straight from US county records — manually checked, skip-traced, and ready to close.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link href="/contact">
            <button
              className="flex items-center gap-2 bg-[#C8A96E] text-[#0A0A0F] font-bold px-7 py-3.5 rounded-xl hover:bg-[#d4b87e] transition-all duration-200 hover:shadow-xl text-sm"
              data-testid="hero-order-now"
            >
              Order Now <ArrowRight size={16} />
            </button>
          </Link>
          <button
            type="button"
            onClick={() => setSampleOpen(true)}
            className="border border-[#C8A96E] text-[#C8A96E] font-semibold px-7 py-3.5 rounded-xl hover:bg-[#C8A96E]/10 transition-all duration-200 text-sm"
            data-testid="hero-free-sample"
          >
            Request Free Sample
          </button>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm text-[#E2E8F0]">
              <CheckCircle size={14} className="text-[#22C55E] flex-shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <SampleRequestModal open={sampleOpen} onClose={() => setSampleOpen(false)} />
    </section>
  );
}
