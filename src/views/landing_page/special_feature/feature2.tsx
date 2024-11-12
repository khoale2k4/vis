import Link from "next/link";

export default function Feature2() {
  return (
    <div className="flex flex-col items-start w-full gap-20 px-8 lg:flex-row h-fit md:px-16 lg:px-28 xl:px-32">
      <div className="flex flex-col w-full gap-4 lg:w-1/2">
        <h1 className="text-2xl font-bold lg:text-3xl">Special Feature 2</h1>
        <span className="font-medium text-md lg:text-lg">
          Description: Lorem ipsum odor amet, consectetuer adipiscing elit.
          Dignissim hendrerit vel magnis turpis tellus sit. Quisque euismod
          montes blandit magnis id, velit augue? Adipiscing fermentum placerat
          nunc sagittis lobortis convallis pretium. Platea felis etiam conubia;
          pellentesque risus himenaeos enim. Fames erat enim ad vestibulum
          facilisi nullam curae aenean neque?
        </span>
        <div className="flex justify-end w-full">

        <Link href={"#"} className="font-semibold text-darkblue-500 hover:underline hover:underline-offset-4">{"Learn more about this feature ->"}</Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-neutral-50 h-80" />
    </div>
  );
}