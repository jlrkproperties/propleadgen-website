import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

interface SampleRequestModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SampleRequestModal({ open, onClose }: SampleRequestModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setName("");
      setEmail("");
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.75)" }}
          data-testid="sample-modal-backdrop"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full"
            style={{
              maxWidth: 480,
              background: "#0F1117",
              border: "1px solid rgba(200, 169, 110, 0.25)",
              borderRadius: 16,
              padding: 40,
            }}
            data-testid="sample-modal"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-[#C8A96E] hover:text-[#d4b87e] transition-colors p-1"
              data-testid="sample-modal-close"
            >
              <X size={22} />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center text-center py-2">
                <CheckCircle2 size={56} className="text-[#C8A96E] mb-5" />
                <h3
                  className="text-white font-display mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700 }}
                >
                  Sample Request Received!
                </h3>
                <p className="text-[#9CA3AF] text-sm mb-6 leading-relaxed">
                  We'll send your sample lead list to{" "}
                  <span className="text-white font-medium">{email}</span> within a few hours.
                </p>
                <button
                  onClick={onClose}
                  className="w-full font-semibold rounded-lg transition-colors"
                  style={{
                    background: "#C8A96E",
                    color: "#0A0A0F",
                    padding: "14px",
                    fontWeight: 600,
                  }}
                  data-testid="sample-modal-success-close"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <p
                  className="text-[#C8A96E] mb-3"
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Free Sample
                </p>
                <h2
                  className="text-white mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28,
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  See Our Data Before You Buy
                </h2>
                <p
                  className="text-[#9CA3AF] mb-6"
                  style={{ fontSize: 15, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}
                >
                  Get a real sample lead list delivered to your inbox — no strings attached.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4" data-testid="sample-modal-form">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Smith"
                      className="w-full text-sm focus:outline-none transition-colors"
                      style={{
                        background: "#1A1D2E",
                        border: "1px solid rgba(200,169,110,0.20)",
                        borderRadius: 8,
                        color: "#FFFFFF",
                        padding: "12px 16px",
                        caretColor: "#FFFFFF",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(200,169,110,0.60)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(200,169,110,0.20)")
                      }
                      data-testid="sample-modal-name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full text-sm focus:outline-none transition-colors"
                      style={{
                        background: "#1A1D2E",
                        border: "1px solid rgba(200,169,110,0.20)",
                        borderRadius: 8,
                        color: "#FFFFFF",
                        padding: "12px 16px",
                        caretColor: "#FFFFFF",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(200,169,110,0.60)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(200,169,110,0.20)")
                      }
                      data-testid="sample-modal-email"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 transition-colors mt-1"
                    style={{
                      background: "#C8A96E",
                      color: "#0A0A0F",
                      borderRadius: 8,
                      padding: "14px",
                      fontWeight: 600,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#d4b87e")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#C8A96E")}
                    data-testid="sample-modal-submit"
                  >
                    Send Me a Free Sample <ArrowRight size={16} />
                  </button>

                  <p
                    className="text-center text-[#6B7280] mt-1"
                    style={{ fontSize: 12, lineHeight: 1.5 }}
                  >
                    We'll email your sample within a few hours. No spam. Unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Modal-scoped placeholder color override (since global form CSS doesn't apply here) */
const styleId = "sample-modal-placeholder-style";
if (typeof document !== "undefined" && !document.getElementById(styleId)) {
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = `
    [data-testid="sample-modal-form"] input::placeholder { color: #6B7280 !important; opacity: 1; }
  `;
  document.head.appendChild(style);
}
