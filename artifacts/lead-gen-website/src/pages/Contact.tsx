import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, CheckCircle, ChevronDown, X, Search } from "lucide-react";

const leadTypeOptions = [
  "Probate Leads",
  "Pre-Probate Leads",
  "Divorce Leads",
  "Eviction Leads",
  "Inheritance Leads",
  "Judgment Leads",
  "Tax Delinquent Leads",
  "Fix & Flip Properties",
  "Distressed Homeowners",
  "Aged Homeowners",
  "Insurance Leads",
  "Mortgage Leads",
  "Refinance Leads",
  "Cold Calling Services",
  "Other / Custom",
];

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California",
  "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas",
  "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
  "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
  "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", whatsapp: "", role: "", leadType: "",
    volume: "", requirements: "",
  });
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [statesOpen, setStatesOpen] = useState(false);
  const [stateSearch, setStateSearch] = useState("");
  const statesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (statesRef.current && !statesRef.current.contains(e.target as Node)) {
        setStatesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!statesOpen) setStateSearch("");
  }, [statesOpen]);

  const filteredStates = US_STATES.filter((s) =>
    s.toLowerCase().includes(stateSearch.toLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleState = (state: string) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    );
  };

  const removeState = (state: string) => {
    setSelectedStates((prev) => prev.filter((s) => s !== state));
  };

  const toggleAll = () => {
    setSelectedStates((prev) =>
      prev.length === US_STATES.length ? [] : [...US_STATES]
    );
  };

  const allSelected = selectedStates.length === US_STATES.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const waMessage = encodeURIComponent("Hi, I'm interested in your lead services. Can you help me?");

  return (
    <>
      <section className="bg-[#0A0A0F] pt-32 pb-20 dot-grid-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-4 font-mono-data">Contact & Order</p>
            <h1 className="hero-title text-white mb-6">Let's Get <span className="text-[#C8A96E]">Started</span></h1>
            <p className="text-[#9CA3AF] text-base max-w-xl mx-auto">
              Tell us what you need. We'll review your requirements and get back to you within 1 business day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <CheckCircle size={56} className="text-[#22C55E] mb-6" />
                  <h2 className="text-2xl font-display font-bold text-[#0A0A0F] mb-3">Order Request Received!</h2>
                  <p className="text-[#6B7280] text-sm max-w-sm">
                    Thank you, {form.name}. We'll review your requirements and reach out within 1 business day to confirm your order.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  data-testid="contact-form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A0A0F] mb-1.5">Full Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange}
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]"
                        data-testid="input-name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A0A0F] mb-1.5">Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]"
                        data-testid="input-email" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A0A0F] mb-1.5">Phone Number *</label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]"
                        data-testid="input-phone" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A0A0F] mb-1.5">WhatsApp Number <span className="text-[#9CA3AF] font-normal">(optional)</span></label>
                      <input type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange}
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]"
                        data-testid="input-whatsapp" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A0A0F] mb-1.5">I am a *</label>
                      <select name="role" required value={form.role} onChange={handleChange}
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] bg-white"
                        data-testid="select-role">
                        <option value="">Select your role</option>
                        <option value="Investor">Real Estate Investor</option>
                        <option value="Wholesaler">Wholesaler</option>
                        <option value="Agent">Real Estate Agent</option>
                        <option value="InsuranceAgent">Insurance Agent</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A0A0F] mb-1.5">Lead Type Interested In *</label>
                      <select name="leadType" required value={form.leadType} onChange={handleChange}
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] bg-white"
                        data-testid="select-lead-type">
                        <option value="">Select Lead Type</option>
                        {leadTypeOptions.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div ref={statesRef} className="relative">
                    <label className="block text-sm font-semibold text-[#0A0A0F] mb-1.5">Target States</label>
                    <div
                      onClick={() => setStatesOpen((o) => !o)}
                      className="w-full min-h-[44px] border border-[#E5E7EB] rounded-xl px-3 py-2 text-sm cursor-pointer focus-within:ring-2 focus-within:ring-[#C8A96E] bg-white flex flex-wrap items-center gap-1.5"
                      data-testid="select-states"
                    >
                      {selectedStates.length === 0 && (
                        <span className="text-[#9CA3AF] px-1">Select target states...</span>
                      )}
                      {selectedStates.map((state) => (
                        <span
                          key={state}
                          className="inline-flex items-center gap-1 bg-[#C8A96E] text-[#0A0A0F] text-xs font-semibold rounded-md px-2 py-1"
                        >
                          {state}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeState(state);
                            }}
                            className="hover:bg-[#0A0A0F]/10 rounded-sm p-0.5"
                            aria-label={`Remove ${state}`}
                          >
                            <X size={12} />
                          </button>
                        </span>
                      ))}
                      <ChevronDown
                        size={18}
                        className={`ml-auto text-[#6B7280] transition-transform ${statesOpen ? "rotate-180" : ""}`}
                      />
                    </div>

                    {statesOpen && (
                      <div className="absolute z-20 mt-1 w-full bg-white border border-[#E5E7EB] rounded-xl shadow-lg max-h-72 overflow-hidden flex flex-col">
                        <div className="flex items-center gap-2 px-3 py-2 border-b border-[#E5E7EB] bg-white">
                          <Search size={14} className="text-[#9CA3AF] shrink-0" />
                          <input
                            type="text"
                            autoFocus
                            value={stateSearch}
                            onChange={(e) => setStateSearch(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            placeholder="Search states..."
                            style={{ color: "#111111", background: "white", caretColor: "#111111" }}
                            className="flex-1 text-sm border-0 outline-none focus:ring-0 placeholder:text-[#9CA3AF]"
                            data-testid="input-state-search"
                          />
                        </div>
                        <div className="overflow-y-auto">
                          {stateSearch.trim() === "" && (
                            <div
                              onClick={toggleAll}
                              className="px-4 py-2.5 text-sm font-semibold text-[#C8A96E] hover:bg-[#FAF7F0] cursor-pointer border-b border-[#E5E7EB] bg-white"
                            >
                              {allSelected ? "Deselect All States" : "Select All States"}
                            </div>
                          )}
                          {filteredStates.length === 0 ? (
                            <div className="px-4 py-3 text-sm text-[#9CA3AF] text-center">
                              No states found
                            </div>
                          ) : (
                            filteredStates.map((state) => {
                              const isSel = selectedStates.includes(state);
                              return (
                                <div
                                  key={state}
                                  onClick={() => toggleState(state)}
                                  className={`px-4 py-2 text-sm cursor-pointer flex items-center justify-between hover:bg-[#FAF7F0] ${isSel ? "bg-[#FAF7F0] text-[#0A0A0F] font-medium" : "text-[#374151]"}`}
                                >
                                  <span>{state}</span>
                                  {isSel && <span className="text-[#C8A96E] text-xs">✓ Selected</span>}
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0A0A0F] mb-1.5">Volume Required *</label>
                    <select name="volume" required value={form.volume} onChange={handleChange}
                      className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] bg-white"
                      data-testid="select-volume">
                      <option value="">Select volume</option>
                      <option value="100-500">100–500 leads</option>
                      <option value="500-1000">500–1,000 leads</option>
                      <option value="1000-5000">1,000–5,000 leads</option>
                      <option value="Custom">Custom / Discuss</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0A0A0F] mb-1.5">Additional Requirements</label>
                    <textarea name="requirements" value={form.requirements} onChange={handleChange} rows={3}
                      placeholder="Specify counties, zip codes, or any other custom requirements..."
                      className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E] resize-none"
                      data-testid="textarea-requirements" />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#C8A96E] text-[#0A0A0F] font-bold py-4 rounded-xl text-sm hover:bg-[#d4b87e] transition-colors"
                    data-testid="btn-submit"
                  >
                    Submit Order Request
                  </button>
                </motion.form>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="bg-[#0A0A0F] rounded-2xl p-6 border border-[#1E2130]">
                <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-4 font-mono-data">Prefer WhatsApp?</p>
                <p className="text-sm text-[#9CA3AF] mb-5">Reach us directly for faster responses — we respond to WhatsApp messages within hours.</p>
                <div className="flex flex-col gap-3">
                  <a href={`https://wa.me/WA_NUMBER_1_PLACEHOLDER?text=${waMessage}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] text-white font-semibold px-4 py-3 rounded-xl text-sm hover:bg-[#1da851] transition-colors">
                    <FaWhatsapp size={18} /> [WA_NUMBER_1_PLACEHOLDER]
                  </a>
                  <a href={`https://wa.me/WA_NUMBER_2_PLACEHOLDER?text=${waMessage}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] text-white font-semibold px-4 py-3 rounded-xl text-sm hover:bg-[#1da851] transition-colors">
                    <FaWhatsapp size={18} /> [WA_NUMBER_2_PLACEHOLDER]
                  </a>
                </div>
              </div>

              <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-[#E5E7EB]">
                <p className="text-xs uppercase tracking-widest text-[#C8A96E] mb-4 font-mono-data">Other Contact</p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#C8A96E]" />
                    <div>
                      <p className="text-xs text-[#6B7280]">Phone</p>
                      <p className="text-sm font-medium text-[#0A0A0F]">[PHONE_1_PLACEHOLDER]</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#C8A96E]" />
                    <div>
                      <p className="text-xs text-[#6B7280]">Phone 2</p>
                      <p className="text-sm font-medium text-[#0A0A0F]">[PHONE_2_PLACEHOLDER]</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-[#C8A96E]" />
                    <div>
                      <p className="text-xs text-[#6B7280]">Email</p>
                      <p className="text-sm font-medium text-[#0A0A0F]">[EMAIL_PLACEHOLDER]</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-4 border-t border-[#E5E7EB]">
                    <p className="text-xs text-[#6B7280]">Response Time</p>
                    <p className="text-sm font-bold text-[#22C55E]">Available 24 x 7</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
