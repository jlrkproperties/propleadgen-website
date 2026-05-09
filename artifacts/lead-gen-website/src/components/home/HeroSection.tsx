import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
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
      className="relative min-h-screen flex items-start justify-center overflow-hidden bg-[#0A0A0F]"
      style={{
        paddingTop: 80, minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center",
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ── Background video ───────────────────────────────── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center center",
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
            filter: "brightness(1.25) contrast(1.05)"
          }}
        >
          <source src="/city-aerial.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlay — keeps text readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,15,0.45) 0%, rgba(10,10,15,0.40) 40%, rgba(10,10,15,0.75) 100%)",
          }}
        />

        {/* Subtle gold tint — ties video to brand palette */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(200, 169, 110, 0.04)",
            mixBlendMode: "screen",
          }}
        />

        {/* Bottom fade — smooth transition into next section */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "180px",
            background: "linear-gradient(to bottom, transparent, #0A0A0F)",
          }}
        />
      </div>

      {/* ── Hero content ───────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-24">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hidden sm:block text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C8A96E] mb-6 font-medium">
            Verified &middot; Fresh &middot; Results-Driven
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-white mb-6 max-w-4xl mx-auto"
          style={{
            textShadow:
              "0 2px 24px rgba(0,0,0,0.95), 0 0 40px rgba(0,0,0,0.6)",
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Find Motivated Sellers{" "}
          <span style={{ color: "#C8A96E" }}>Before Anyone Else Does.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="hidden sm:block text-base sm:text-lg text-[#F1F5F9] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            textShadow:
              "0 1px 16px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.7)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We source, verify, and deliver targeted lead lists straight from US
          county records — manually checked, skip-traced, and ready to close.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link href="/contact">
            <button
              className="flex w-full sm:w-auto items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl text-sm"
              style={{
                backgroundColor: "#C8A96E",
                color: "#0A0A0F",
              }}
              data-testid="hero-order-now"
            >
              Order Now <ArrowRight size={16} />
            </button>
          </Link>

          <button
            type="button"
            onClick={() => setSampleOpen(true)}
            className="flex font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm"
            style={{
              border: "1px solid #C8A96E",
              color: "#C8A96E",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(200,169,110,0.10)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "transparent";
            }}
            data-testid="hero-free-sample"
          >
            Request Free Sample
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="hidden sm:flex flex-wrap items-center justify-center gap-4 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-sm text-[#E2E8F0]"
            >
              <CheckCircle size={14} className="text-[#22C55E] flex-shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Sample request modal */}
      <SampleRequestModal
        open={sampleOpen}
        onClose={() => setSampleOpen(false)}
      />
    </section>
  );
}
