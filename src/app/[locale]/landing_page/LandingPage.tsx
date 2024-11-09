import Navbar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import HeroSection from "@/views/landing_page/hero_section";
import {
  Feature1,
  Feature2,
  Feature3
} from "@/views/landing_page/special_feature";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full gap-20 min-h-dvh">
      <Navbar />
      <HeroSection />
      <div className="flex flex-col gap-40 xl:gap-60">
        <Feature1 />
        <Feature2 />
        <Feature3 />
      </div>
      <Footer />
    </div>
  );
}