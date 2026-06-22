import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import ImpactStats from "@/components/ImpactStats";
import ProjectsPreview from "@/components/ProjectsPreview";
import VideoSection from "@/components/VideoSection";
import DonationSection from "@/components/DonationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <ImpactStats />
      <ProjectsPreview />
      <VideoSection />

      {/* Phase 1 Placeholders for other sections */}
      <section id="gallery" className="py-24 px-6 bg-background flex items-center justify-center border-b border-gray-100">
        <h2 className="text-gray-300 font-display">Gallery Section [Phase 4]</h2>
      </section>

      <section id="blog" className="py-24 px-6 bg-white flex items-center justify-center border-b border-gray-100">
        <h2 className="text-gray-300 font-display">Blog Section [Phase 5]</h2>
      </section>

      <section id="events" className="py-24 px-6 bg-background flex items-center justify-center border-b border-gray-100">
        <h2 className="text-gray-300 font-display">Events Section [Phase 6]</h2>
      </section>

      <section id="qurbani" className="py-24 px-6 bg-white flex items-center justify-center border-b border-gray-100">
        <h2 className="text-gray-300 font-display">Qurbani Section [Phase 3]</h2>
      </section>

      <section id="contact" className="py-24 px-6 bg-background flex items-center justify-center">
        <h2 className="text-gray-300 font-display">Contact Section [Phase 10]</h2>
      </section>

      <DonationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
