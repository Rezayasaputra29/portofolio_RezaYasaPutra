import SplashScreen from "../src/components/SplashScreen";
import Navbar from "../src/components/navbar";
import HeroSection from "../src/components/HeroSection";
import AboutSection from "../src/components/AboutSection";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <main className="min-h-screen w-full flex flex-col overflow-x-hidden bg-[#020617]">
        <Navbar />
        {/* Di sinilah HeroSection dipanggil untuk menggantikan teks statis sebelumnya */}
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}