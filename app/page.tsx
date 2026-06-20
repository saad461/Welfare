import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />

      {/* Phase 1 Placeholders for other sections */}
      <section id="projects" className="py-24 px-6 bg-white flex items-center justify-center border-b border-gray-100">
        <h2 className="text-gray-300 font-display">Projects Section [Phase 2]</h2>
      </section>

      <section id="gallery" className="py-24 px-6 bg-background flex items-center justify-center border-b border-gray-100">
        <h2 className="text-gray-300 font-display">Gallery Section [Phase 2]</h2>
      </section>

      <section id="blog" className="py-24 px-6 bg-white flex items-center justify-center border-b border-gray-100">
        <h2 className="text-gray-300 font-display">Blog Section [Phase 2]</h2>
      </section>

      <section id="events" className="py-24 px-6 bg-background flex items-center justify-center border-b border-gray-100">
        <h2 className="text-gray-300 font-display">Events Section [Phase 2]</h2>
      </section>

      <section id="qurbani" className="py-24 px-6 bg-white flex items-center justify-center border-b border-gray-100">
        <h2 className="text-gray-300 font-display">Qurbani Section [Phase 2]</h2>
      </section>

      <section id="contact" className="py-24 px-6 bg-background flex items-center justify-center">
        <h2 className="text-gray-300 font-display">Contact Section [Phase 2]</h2>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
