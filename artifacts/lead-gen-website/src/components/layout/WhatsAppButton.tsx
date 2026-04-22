import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const numbers = [
    {
      label: "WhatsApp Number 1",
      number: "WA_NUMBER_1_PLACEHOLDER",
      display: "[WA_NUMBER_1_PLACEHOLDER]",
    },
    {
      label: "WhatsApp Number 2",
      number: "WA_NUMBER_2_PLACEHOLDER",
      display: "[WA_NUMBER_2_PLACEHOLDER]",
    },
  ];

  const message = encodeURIComponent(
    "Hi, I'm interested in your lead services. Can you help me?"
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-[#13151C] border border-[#1E2130] rounded-2xl p-4 shadow-2xl min-w-[220px]"
          >
            <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-3">
              Chat with us
            </p>
            {numbers.map((n) => (
              <a
                key={n.number}
                href={`https://wa.me/${n.number}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#1E2130] transition-colors mb-1"
                data-testid={`wa-link-${n.number}`}
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp size={16} color="white" />
                </div>
                <div>
                  <p className="text-xs text-[#6B7280]">{n.label}</p>
                  <p className="text-sm text-white font-medium">{n.display}</p>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg wa-pulse hover:scale-110 transition-transform"
        title="Chat with us"
        data-testid="wa-float-btn"
        aria-label="Chat on WhatsApp"
      >
        {open ? (
          <X size={22} color="white" />
        ) : (
          <FaWhatsapp size={26} color="white" />
        )}
      </button>
    </div>
  );
}
