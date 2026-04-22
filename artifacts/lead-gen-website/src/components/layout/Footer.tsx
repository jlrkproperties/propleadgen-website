import { Link } from "wouter";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail, Phone } from "lucide-react";

const socialLinks = [
  { Icon: FaFacebook, href: "https://facebook.com/[FACEBOOK_PLACEHOLDER]", label: "Facebook" },
  { Icon: FaInstagram, href: "https://instagram.com/[INSTAGRAM_PLACEHOLDER]", label: "Instagram" },
  { Icon: FaLinkedin, href: "https://linkedin.com/company/[LINKEDIN_PLACEHOLDER]", label: "LinkedIn" },
  { Icon: FaXTwitter, href: "https://twitter.com/[TWITTER_PLACEHOLDER]", label: "X / Twitter" },
];

const leadTypes = [
  { label: "Probate Leads", href: "/real-estate-leads/probate" },
  { label: "Pre-Probate Leads", href: "/real-estate-leads/pre-probate" },
  { label: "Divorce Leads", href: "/real-estate-leads/divorce" },
  { label: "Eviction Leads", href: "/real-estate-leads/eviction" },
  { label: "Inheritance Leads", href: "/real-estate-leads/inheritance" },
  { label: "Judgment Leads", href: "/real-estate-leads/judgment" },
  { label: "Tax Delinquent Leads", href: "/real-estate-leads/tax-delinquent" },
  { label: "Fix & Flip Leads", href: "/real-estate-leads/fix-and-flip" },
  { label: "Distressed Homeowners", href: "/real-estate-leads/distressed-homeowners" },
  { label: "Aged Homeowners", href: "/real-estate-leads/aged-homeowners" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-[#1E2130]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/">
              <span className="font-display text-2xl font-bold text-[#C8A96E] cursor-pointer">
                [BRAND_NAME]
              </span>
            </Link>
            <p className="mt-2 text-xs uppercase tracking-widest text-[#6B7280]">Accuracy Over Volume.</p>
            <p className="mt-4 text-sm text-[#9CA3AF] leading-relaxed">
              Verified, fresh leads sourced directly from US county records. Delivered in 2–4 days.
            </p>
            <div className="mt-5 flex items-center" style={{ gap: 16 }}>
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#6B7280] hover:text-[#C8A96E] transition-colors duration-200"
                  data-testid={`footer-social-${label.toLowerCase().replace(/[^a-z]/g, "")}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://wa.me/WA_NUMBER_1_PLACEHOLDER?text=Hi,%20I'm%20interested%20in%20your%20lead%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#25D366] hover:text-white transition-colors"
                data-testid="footer-whatsapp-1"
              >
                <FaWhatsapp size={16} />
                [WA_NUMBER_1_PLACEHOLDER]
              </a>
              <a
                href="https://wa.me/WA_NUMBER_2_PLACEHOLDER?text=Hi,%20I'm%20interested%20in%20your%20lead%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#25D366] hover:text-white transition-colors"
                data-testid="footer-whatsapp-2"
              >
                <FaWhatsapp size={16} />
                [WA_NUMBER_2_PLACEHOLDER]
              </a>
              <a
                href="mailto:[EMAIL_PLACEHOLDER]"
                className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors"
                data-testid="footer-email"
              >
                <Mail size={14} />
                [EMAIL_PLACEHOLDER]
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-5">Real Estate Leads</p>
            <ul className="flex flex-col gap-2.5">
              {leadTypes.map((lt) => (
                <li key={lt.href}>
                  <Link href={lt.href}>
                    <span className="text-sm text-[#9CA3AF] hover:text-white transition-colors cursor-pointer">
                      {lt.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-5">Services</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Real Estate Leads", href: "/real-estate-leads" },
                { label: "Specialty Leads", href: "/specialty-leads" },
                { label: "Cold Calling", href: "/cold-calling" },
                { label: "Pricing", href: "/pricing" },
                { label: "About Us", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm text-[#9CA3AF] hover:text-white transition-colors cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-5">Contact</p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                <Phone size={14} className="text-[#C8A96E]" />
                [PHONE_1_PLACEHOLDER]
              </li>
              <li className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                <Phone size={14} className="text-[#C8A96E]" />
                [PHONE_2_PLACEHOLDER]
              </li>
              <li>
                <a href="mailto:[EMAIL_PLACEHOLDER]" className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  <Mail size={14} className="text-[#C8A96E]" />
                  [EMAIL_PLACEHOLDER]
                </a>
              </li>
              <li className="text-sm text-[#9CA3AF]">
                <span className="text-[#22C55E] font-semibold">Available 24 x 7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1E2130] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B7280]">
            &copy; 2026 [BRAND_NAME]. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy">
              <span className="text-sm text-[#6B7280] hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/terms">
              <span className="text-sm text-[#6B7280] hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
