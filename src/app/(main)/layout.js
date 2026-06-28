import Navbar from "@/components/Navbar";
import FloatingParticles from "@/components/FloatingParticles";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <FloatingParticles />

      {children}

      <CommandPalette />

      <ScrollToTop />

      <Footer />
    </>
  );
}
