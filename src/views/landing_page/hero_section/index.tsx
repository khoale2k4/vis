import Image from "next/image";
import Background from "@/../public/landing_page/Background.svg";
import Main from "@/../public/landing_page/main.svg";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-fit">
      <div className="w-full -mb-1 h-[29rem] bg-darkblue-500" />
      <Image
        src={Background}
        alt="Background"
        placeholder="empty"
        priority
        width={500}
        height={500}
        quality={100}
        sizes="(min-width: 808px) 50vw, 100vw"
        className="w-full"
      />

      <div className="absolute top-0 z-10 flex items-center justify-center h-full gap-10 px-8 w-fit md:px-16 lg:px-28 xl:px-32">
        <div className="flex flex-col w-full xl:w-1/2 h-fit">
          <h1 className="text-3xl font-bold text-white">
            Best solution for cloud storage
          </h1>
          <span className="text-white text-md">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim
            hendrerit vel magnis turpis tellus sit
          </span>
          <div className="flex flex-col items-center w-full gap-4 mt-14 md:flex-row h-fit">
            <Link
              href="#"
              className="px-6 py-2 text-xl text-white rounded-full md:text-lg bg-orangelogo-500">
              Start now for free
            </Link>
            <Link href="#" className="text-lg text-white underline underline-offset-4">
              {"View our plans ->"}
            </Link>
          </div>
        </div>
        <Image
          src={Main}
          alt="Main"
          placeholder="empty"
          priority
          width={250}
          height={250}
          quality={100}
          className="hidden w-1/2 xl:block"
        />
      </div>
    </div>
  );
}