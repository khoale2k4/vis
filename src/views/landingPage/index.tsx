import HeroSection from "./hero_section";
import {
    Feature1,
    Feature2,
    Feature3
} from "./special_feature";
import SlideInView from "@/components/effect/slideInView";

export default function LandingPage() {
    return (
        <div className="pb-20">
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
        </div>
    );
}