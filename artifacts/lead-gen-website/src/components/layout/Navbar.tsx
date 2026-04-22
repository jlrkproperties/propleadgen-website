import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    dropdown: [
      { label: "Real Estate Leads", href: "/real-estate-leads" },
      { label: "Specialty Leads", href: "/specialty-leads" },
      { label: "Cold Calling", href: "/cold-calling" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#1E2130]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" data-testid="nav-logo">
            <span className="font-display text-2xl font-bold text-[#C8A96E] tracking-tight cursor-pointer">
              [BRAND_NAME]
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" data-testid="nav-desktop">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm text-[#9CA3AF] hover:text-white transition-colors"
                    data-testid={`nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52"
                      >
                        <div className="bg-[#13151C] border border-[#1E2130] rounded-xl overflow-hidden shadow-2xl">
                          {link.dropdown.map((item) => (
                            <Link key={item.href} href={item.href}>
                              <span className="block px-4 py-3 text-sm text-[#9CA3AF] hover:text-white hover:bg-[#1E2130] transition-colors cursor-pointer">
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-sm text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
                    data-testid={`nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </span>
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact">
              <button
                className="bg-[#C8A96E] text-[#0A0A0F] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#d4b87e] transition-all duration-200 hover:shadow-lg"
                data-testid="nav-cta"
              >
                Get Started
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="nav-mobile-toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-16 bg-[#0A0A0F] z-40 overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-3">{link.label}</p>
                    <div className="flex flex-col gap-3 pl-2">
                      {link.dropdown.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <span className="text-lg text-white font-medium cursor-pointer block">{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href}>
                    <span className="text-2xl font-display font-bold text-white cursor-pointer block">{link.label}</span>
                  </Link>
                )
              )}
              <Link href="/contact">
                <button className="mt-4 w-full bg-[#C8A96E] text-[#0A0A0F] font-bold text-base px-6 py-3 rounded-xl">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
