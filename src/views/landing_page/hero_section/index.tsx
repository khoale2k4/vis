import Image from "next/image";
import Background from "@/../public/landing_page/Background.svg";
import Main from "@/../public/landing_page/main.svg";
import Link from "next/link";
import { TypewriterEffect } from "@/components/effect/typeWriterEffect";
import { Button } from "@nextui-org/react";
import SlideInView from "@/components/effect/slideInView";
import { FaChevronRight } from "react-icons/fa";

const slogans = [
  {
    text: "Best",
    className: "text-white",
  },
  {
    text: "Solution",
    className: "text-orangelogo-500",
  },
  {
    text: "for",
    className: "text-white",
  },
  {
    text: "cloud",
    className: "text-white",
  },
  {
    text: "storage.",
    className: "text-white",
  },
];

export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="w-full h-fit pt-28 pb-12 -mb-1 bg-darkblue-500">
        <div className="flex items-center justify-center w-full gap-2 px-8 h-fit md:px-16 lg:px-20 xl:px-38">
          <div className="flex flex-col w-full gap-2 xl:w-1/2 h-fit">
            <h1 className="font-bold text-white">
              <TypewriterEffect words={slogans} className="text-2xl text-center lg:text-start min-h-24" />
            </h1>
            <SlideInView direction="bot2top" duration={1}>
              <span className="text-center text-white text-md lg:text-start">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim
                hendrerit vel magnis turpis tellus sit
              </span>
            </SlideInView>
            <div className="flex flex-col items-center w-full gap-4 mt-14 md:flex-row h-fit">
              <SlideInView direction="bot2top" duration={1.3}>
                <Button as={Link} href="#" radius="full" size="lg" className="text-lg font-bold text-white bg-orangelogo-500">
                  Start now for free
                </Button>
              </SlideInView>
              <SlideInView direction="bot2top" duration={1.6}>
                <Link href="/pricing" className="text-white underline text-md underline-offset-4 flex gap-0.5 place-items-center">
                  View our plans <FaChevronRight className="h-3 mt-0.5" />
                </Link>
              </SlideInView>
            </div>
          </div>
          <SlideInView direction="right2left" duration={1.6} className="relative">
            <Image
              src={Main}
              alt="Main"
              placeholder="empty"
              priority
              width={250}
              height={250}
              quality={100}
              className="hidden w-full xl:block rounded-l-full ml-3 pl-20"
            />
            <div className="w-[3px] rounded-full h-full bg-orangelogo-500 -right-1 absolute top-0" />
          </SlideInView>
        </div>
      </div>
      <Image
        src={Background}
        alt="Background"
        placeholder="empty"
        priority
        width={500}
        height={500}
        quality={100}
        className="w-full h-auto"
      />
    </div>
  );
}