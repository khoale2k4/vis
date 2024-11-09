import Navbar from "@/layouts/publicLayout/navbar";
import Footer from "@/layouts/publicLayout/footer";
import HeroSection from "@/views/landing_page/hero_section";
import {
  Feature1,
  Feature2,
  Feature3
} from "@/views/landing_page/special_feature";
import SlideInView from "@/components/effect/slideInView";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full gap-20 overflow-x-hidden min-h-dvh">
      <Navbar />
      <HeroSection />
      <div className="flex flex-col gap-60 xl:gap-60">
        <SlideInView direction="left2right" duration={1}>
          <Feature1 />
        </SlideInView>
        <SlideInView direction="right2left" duration={1}>
          <Feature2 />
        </SlideInView>
        <SlideInView direction="left2right" duration={1}>
          <Feature3 />
        </SlideInView>
      </div>
      <Footer />
    </div>
  );
}