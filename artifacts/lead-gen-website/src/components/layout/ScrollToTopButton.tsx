import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            bottom: 110,
            right: 27,
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(200, 169, 110, 0.15)",
            border: "1px solid rgba(200, 169, 110, 0.40)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
            color: "#C8A96E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 50,
            transition: "background-color 200ms ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(200, 169, 110, 0.30)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(200, 169, 110, 0.15)")
          }
          data-testid="scroll-to-top"
        >
          <FaChevronUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
