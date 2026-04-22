import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ScrollToTopButton from "./ScrollToTopButton";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}
