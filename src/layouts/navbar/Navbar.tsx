import Link from "next/link";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  return ( 
    <div className="fixed top-0 left-0 flex items-center w-full gap-12 px-12 py-4 bg-darkblue-500 sm-max:px-4 sm-max:py-4">
      <div className="flex items-center gap-4 h-fit w-fit">
        <div className="bg-white rounded-full size-12 brand_icon"></div>
        <span className="text-2xl font-bold text-white md-max:text-lg">
          VIStorage
        </span>
      </div>
      <div className="flex gap-12 h-fit w-fit lg-max:hidden">
        {NavigationItem.map((item: NavigationItemType, index: number) => (
          <Link
            href={item.link}
            key={index}
            className="text-white text-md hover:underline hover:underline-offset-4">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 ml-auto w-fit h-fit ">
				<NavbarButton name="Sign in" link="#" className="text-white bg-darkblue-500 hover:bg-darkblue-600"/>
				<NavbarButton name="Sign up" link="#" className="bg-white text-darkblue-500 hover:bg-white-300"/>
      </div>
    </div>
  );
}

type NavigationItemType = {
  name: string;
  link: string;
};

const NavigationItem: NavigationItemType[] = [
  {
    name: "Products",
    link: "#",
  },
  {
    name: "Solutions",
    link: "#",
  },
  {
    name: "Our team",
    link: "#",
  },
  {
    name: "Pricing",
    link: "#",
  },
];