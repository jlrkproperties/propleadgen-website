import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import LeadTypesGrid from "@/components/home/LeadTypesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ROICalculator from "@/components/home/ROICalculator";
import USMapSection from "@/components/home/USMapSection";
import SampleLeadPreview from "@/components/home/SampleLeadPreview";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <LeadTypesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <ROICalculator />
      <USMapSection />
      <SampleLeadPreview />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </>
  );
}
