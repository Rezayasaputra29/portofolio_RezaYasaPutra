import HeroSection from "../src/components/HeroSection";
import AboutSection from "../src/components/AboutSection";
import PortfolioSection from "../src/components/PortfolioSection";
import ContactSection from '../src/components/ContactSection';

// Navbar dirender di app/layout.tsx agar konsisten di semua halaman.
// LanguageProvider juga sudah disediakan di layout.

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full flex flex-col overflow-x-hidden bg-[#020617]">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection/>
      </main>
    </>
  );
}