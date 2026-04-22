import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const sampleLeads = [
  {
    name: "J*** S******",
    address: "1** Oak Street",
    city: "Columbus",
    state: "OH",
    phone: "(614) ***-****",
    email: "j***@***.com",
    type: "Probate",
  },
  {
    name: "M*** W******",
    address: "4** Elm Avenue",
    city: "Phoenix",
    state: "AZ",
    phone: "(602) ***-****",
    email: "m***@***.com",
    type: "Divorce",
  },
  {
    name: "R*** J******",
    address: "7** Pine Road",
    city: "Dallas",
    state: "TX",
    phone: "(214) ***-****",
    email: "r***@***.com",
    type: "Eviction",
  },
];

export default function SampleLeadPreview() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-[#F8F9FA] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-3 font-mono-data">Data Preview</p>
          <h2 className="section-title text-[#0A0A0F]">See What You're Getting</h2>
          <p className="mt-4 text-[#6B7280] text-sm">Real data. Verified. Delivered clean.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="bg-[#C8A96E]/10 border border-[#C8A96E]/30 rounded-t-xl px-4 py-2.5 flex items-center gap-2">
            <span className="text-xs font-mono-data font-semibold text-[#C8A96E] uppercase tracking-widest">
              SAMPLE — Data redacted for privacy
            </span>
          </div>

          <div className="overflow-x-auto rounded-b-xl border border-t-0 border-[#E5E7EB] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8F9FA] z-10 pointer-events-none" />
            <table className="min-w-full text-sm bg-white">
              <thead className="bg-[#0A0A0F] text-white">
                <tr>
                  {["Owner Name", "Property Address", "City", "State", "Phone", "Email", "Lead Type"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sampleLeads.map((lead, i) => (
                  <tr
                    key={i}
                    className="border-t border-[#E5E7EB] blur-[2px] select-none"
                  >
                    <td className="px-4 py-3 font-mono-data text-xs text-[#0A0A0F]">{lead.name}</td>
                    <td className="px-4 py-3 text-xs text-[#374151]">{lead.address}</td>
                    <td className="px-4 py-3 text-xs text-[#374151]">{lead.city}</td>
                    <td className="px-4 py-3 text-xs font-mono-data text-[#374151]">{lead.state}</td>
                    <td className="px-4 py-3 font-mono-data text-xs text-[#374151]">{lead.phone}</td>
                    <td className="px-4 py-3 text-xs text-[#374151]">{lead.email}</td>
                    <td className="px-4 py-3">
                      <span className="bg-[#C8A96E]/20 text-[#8B6914] text-xs font-semibold px-2 py-1 rounded-full">
                        {lead.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-8">
              <CheckCircle size={40} className="text-[#22C55E]" />
              <p className="text-[#0A0A0F] font-semibold">Sample request received!</p>
              <p className="text-sm text-[#6B7280] text-center">
                We'll send your free sample to <span className="font-semibold text-[#0A0A0F]">{email}</span> within 1 business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm text-[#0A0A0F] focus:outline-none focus:ring-2 focus:ring-[#C8A96E] bg-white"
                data-testid="sample-email-input"
              />
              <button
                type="submit"
                className="bg-[#C8A96E] text-[#0A0A0F] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#d4b87e] transition-colors whitespace-nowrap"
                data-testid="sample-submit-btn"
              >
                Request Free Sample
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
