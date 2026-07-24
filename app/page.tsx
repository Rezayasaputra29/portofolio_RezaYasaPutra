import SplashScreen from "../src/components/SplashScreen";
import Navbar from "../src/components/navbar";
import HeroSection from "../src/components/HeroSection";
import AboutSection from "../src/components/AboutSection";
import PortfolioSection from "../src/components/PortfolioSection";
import ContactSection from '../src/components/ContactSection';

// PERHATIKAN: Tidak ada lagi import LanguageProvider di sini!

export default function Home() {
  return (
    // Kembalikan menggunakan tag kosong <> seperti ini
    <>
      <SplashScreen />
      <main className="min-h-screen w-full flex flex-col overflow-x-hidden bg-[#020617]">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection/>
      </main>
    </>
  );
}