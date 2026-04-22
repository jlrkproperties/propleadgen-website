import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";

const leadTypes = [
  "Probate", "Divorce", "Eviction", "Tax Delinquent", "Pre-Probate",
  "Inheritance", "Judgment", "Fix & Flip", "Distressed Homeowners",
  "Aged Homeowners", "Other",
];

export default function ROICalculator() {
  const [leads, setLeads] = useState(500);
  const [leadType, setLeadType] = useState("Probate");
  const [closeRate, setCloseRate] = useState(5);
  const [dealProfit, setDealProfit] = useState(5000);
  const [costPerLeadRaw, setCostPerLeadRaw] = useState("");

  const costPerLead = parseFloat(costPerLeadRaw);
  const hasPrice = costPerLeadRaw.trim() !== "" && !isNaN(costPerLead) && costPerLead > 0;

  const estimatedDeals = Math.floor((leads * closeRate) / 100);
  const totalInvestment = hasPrice ? leads * costPerLead : 0;
  const projectedRevenue = estimatedDeals * dealProfit;
  const roi = hasPrice && totalInvestment > 0
    ? Math.round(((projectedRevenue - totalInvestment) / totalInvestment) * 100)
    : 0;

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const scrollToContact = () => {
    const el = document.getElementById("contact-cta") ?? document.querySelector("[data-contact]");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-3 font-mono-data">ROI Calculator</p>
          <h2 className="section-title text-[#0A0A0F]">Calculate Your ROI</h2>
          <p className="mt-4 text-[#6B7280] text-sm">
            See what your investment in quality leads could return.
          </p>
        </motion.div>

        <motion.div
          className="bg-[#F8F9FA] rounded-2xl p-8 lg:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-7">
              <div>
                <label className="block text-sm font-semibold text-[#0A0A0F] mb-2">
                  Number of Leads: <span className="font-mono-data text-[#C8A96E]">{leads.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min={100}
                  max={5000}
                  step={100}
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#C8A96E]"
                  data-testid="roi-leads-slider"
                />
                <div className="flex justify-between text-xs text-[#9CA3AF] mt-1">
                  <span>100</span><span>5,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A0A0F] mb-2">Lead Type</label>
                <select
                  value={leadType}
                  onChange={(e) => setLeadType(e.target.value)}
                  className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm text-[#0A0A0F] bg-white focus:outline-none focus:ring-2 focus:ring-[#C8A96E]"
                  data-testid="roi-lead-type"
                >
                  {leadTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0A0A0F] mb-2">
                  Your Close Rate: <span className="font-mono-data text-[#C8A96E]">{closeRate}%</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={20}
                  step={1}
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#C8A96E]"
                  data-testid="roi-close-rate-slider"
                />
                <div className="flex justify-between text-xs text-[#9CA3AF] mt-1">
                  <span>1%</span><span>20%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0A0A0F] mb-2">Avg. Deal Profit ($)</label>
                  <input
                    type="number"
                    value={dealProfit}
                    onChange={(e) => setDealProfit(Math.max(0, Number(e.target.value)))}
                    className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm text-[#0A0A0F] bg-white focus:outline-none focus:ring-2 focus:ring-[#C8A96E]"
                    data-testid="roi-deal-profit"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0A0A0F] mb-2">Cost per Lead ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={costPerLeadRaw}
                    placeholder="Enter your quoted price"
                    onChange={(e) => setCostPerLeadRaw(e.target.value)}
                    className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2.5 text-sm text-[#0A0A0F] bg-white focus:outline-none focus:ring-2 focus:ring-[#C8A96E] placeholder:text-[#9CA3AF]"
                    data-testid="roi-cost-per-lead"
                  />
                </div>
              </div>
            </div>

            <div
              className="bg-[#0A0A0F] border border-[#C8A96E] rounded-2xl p-8 flex flex-col justify-between"
              data-testid="roi-output"
            >
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp size={20} className="text-[#C8A96E]" />
                  <span className="text-sm font-semibold text-white">Estimated Returns</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-widest mb-1">Deals Closed</p>
                    <p className="text-2xl font-bold text-white font-mono-data" data-testid="roi-deals-closed">
                      {estimatedDeals}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-widest mb-1">Total Investment</p>
                    {hasPrice ? (
                      <p className="text-2xl font-bold text-white font-mono-data" data-testid="roi-total-investment">
                        {fmt(totalInvestment)}
                      </p>
                    ) : (
                      <button
                        onClick={scrollToContact}
                        className="flex items-center gap-1.5 group"
                        data-testid="roi-custom-quote"
                        aria-label="Request a custom quote"
                      >
                        <span className="text-base font-bold text-[#C8A96E] group-hover:underline leading-tight">
                          Request a Custom Quote
                        </span>
                        <ArrowRight
                          size={14}
                          className="text-[#C8A96E] group-hover:translate-x-0.5 transition-transform"
                        />
                      </button>
                    )}
                  </div>

                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-widest mb-1">Projected Revenue</p>
                    <p className="text-2xl font-bold text-white font-mono-data" data-testid="roi-projected-revenue">
                      {fmt(projectedRevenue)}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#6B7280] uppercase tracking-widest mb-1">Estimated ROI</p>
                    {hasPrice ? (
                      <p className="text-2xl font-bold text-[#C8A96E] font-mono-data" data-testid="roi-estimated-roi">
                        {roi}%
                      </p>
                    ) : (
                      <p
                        className="text-[#6B7280] italic leading-snug"
                        style={{ fontSize: 13 }}
                        data-testid="roi-estimated-roi"
                      >
                        Enter your quoted price to calculate
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[#1E2130] pt-4 flex flex-col gap-2">
                <p className="text-xs text-[#6B7280]">
                  Estimates are illustrative. Actual results vary based on market conditions, lead quality, and strategy.
                </p>
                <p className="text-xs text-[#4B5563] italic">
                  Pricing varies based on lead type, volume, and location. Contact us for an accurate quote.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
