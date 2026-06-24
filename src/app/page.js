import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import GadgetMockup from "@/components/GadgetMockup";
import Statistics from "@/components/Statistics";
import FeaturedGadgets from "@/components/FeaturedGadgets";
import EscrowTimeline from "@/components/EscrowTimeline";
import CodPlanner from "@/components/CodPlanner";
import ConditionScore from "@/components/ConditionScore";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="page-transition relative z-10 min-h-screen overflow-hidden bg-black text-white">
      {/* =========================
          AURORA BACKGROUND
      ========================== */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-150px] left-[-150px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute right-[-150px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[140px]" />

        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* =========================
          LANDING PAGE
      ========================== */}
      <section className="relative z-10 px-6 pt-32">
        <div className="mx-auto max-w-6xl text-center">
          {/* Hero */}
          <div className="reveal-up">
            <Hero />
          </div>

          {/* Fitur Utama */}
          <div className="reveal-up">
            <FeatureCards />
          </div>

          {/* Mockup Gadget */}
          <div className="reveal-up">
            <GadgetMockup />
          </div>

          {/* Statistik */}
          <div className="reveal-up">
            <Statistics />
          </div>

          {/* Produk Unggulan */}
          <div className="reveal-up">
            <FeaturedGadgets />
          </div>

          {/* Alur Rekber */}
          <EscrowTimeline />

          {/* Simulasi COD */}
          <CodPlanner />

          {/* Skor Kondisi */}
          <ConditionScore />

          <FAQ />

          <Testimonials />

          <CallToAction />
        </div>
      </section>
    </main>
  );
}
