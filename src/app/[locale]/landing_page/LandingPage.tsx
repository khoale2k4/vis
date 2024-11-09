import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import HeroSection from "@/views/landing_page/hero_section";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full min-h-dvh">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}