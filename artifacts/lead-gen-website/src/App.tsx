import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/utils/ScrollToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import RealEstateLeads from "@/pages/RealEstateLeads";
import ProbateLeads from "@/pages/real-estate-leads/ProbateLeads";
import PreProbateLeads from "@/pages/real-estate-leads/PreProbateLeads";
import DivorceLeads from "@/pages/real-estate-leads/DivorceLeads";
import EvictionLeads from "@/pages/real-estate-leads/EvictionLeads";
import InheritanceLeads from "@/pages/real-estate-leads/InheritanceLeads";
import JudgmentLeads from "@/pages/real-estate-leads/JudgmentLeads";
import TaxDelinquentLeads from "@/pages/real-estate-leads/TaxDelinquentLeads";
import FixAndFlipLeads from "@/pages/real-estate-leads/FixAndFlipLeads";
import DistressedHomeowners from "@/pages/real-estate-leads/DistressedHomeowners";
import AgedHomeowners from "@/pages/real-estate-leads/AgedHomeowners";
import NonRealEstateLeads from "@/pages/NonRealEstateLeads";
import ColdCalling from "@/pages/ColdCalling";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/">
          <AnimatedPage><Home /></AnimatedPage>
        </Route>
        <Route path="/real-estate-leads">
          <AnimatedPage><RealEstateLeads /></AnimatedPage>
        </Route>
        <Route path="/real-estate-leads/probate">
          <AnimatedPage><ProbateLeads /></AnimatedPage>
        </Route>
        <Route path="/real-estate-leads/pre-probate">
          <AnimatedPage><PreProbateLeads /></AnimatedPage>
        </Route>
        <Route path="/real-estate-leads/divorce">
          <AnimatedPage><DivorceLeads /></AnimatedPage>
        </Route>
        <Route path="/real-estate-leads/eviction">
          <AnimatedPage><EvictionLeads /></AnimatedPage>
        </Route>
        <Route path="/real-estate-leads/inheritance">
          <AnimatedPage><InheritanceLeads /></AnimatedPage>
        </Route>
        <Route path="/real-estate-leads/judgment">
          <AnimatedPage><JudgmentLeads /></AnimatedPage>
        </Route>
        <Route path="/real-estate-leads/tax-delinquent">
          <AnimatedPage><TaxDelinquentLeads /></AnimatedPage>
        </Route>
        <Route path="/real-estate-leads/fix-and-flip">
          <AnimatedPage><FixAndFlipLeads /></AnimatedPage>
        </Route>
        <Route path="/real-estate-leads/distressed-homeowners">
          <AnimatedPage><DistressedHomeowners /></AnimatedPage>
        </Route>
        <Route path="/real-estate-leads/aged-homeowners">
          <AnimatedPage><AgedHomeowners /></AnimatedPage>
        </Route>
        <Route path="/specialty-leads">
          <AnimatedPage><NonRealEstateLeads /></AnimatedPage>
        </Route>
        <Route path="/cold-calling">
          <AnimatedPage><ColdCalling /></AnimatedPage>
        </Route>
        <Route path="/pricing">
          <AnimatedPage><Pricing /></AnimatedPage>
        </Route>
        <Route path="/about">
          <AnimatedPage><About /></AnimatedPage>
        </Route>
        <Route path="/faq">
          <AnimatedPage><FAQ /></AnimatedPage>
        </Route>
        <Route path="/contact">
          <AnimatedPage><Contact /></AnimatedPage>
        </Route>
        <Route>
          <AnimatedPage><NotFound /></AnimatedPage>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
