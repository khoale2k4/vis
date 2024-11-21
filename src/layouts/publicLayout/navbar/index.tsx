"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import RenderCase from "@/components/render";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export default function PublicNavbar() {
  const pathname = usePathname();
  const isAuthPage = pathname.includes("/authentication");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className={`fixed top-0 z-50 flex bg-darkblue-500 ${isAuthPage ? "border-b-[0.5px] border-gray-100/50" : "py-2"}`}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Link href="/" className="flex gap-4 justify-center place-items-center">
          <div className={`bg-white rounded-full size-8 brand_icon ${isAuthPage ? "lg:size-10" : "lg:size-12"}`}></div>
          <span className="text-lg font-bold text-white lg:text-2xl">
            VIStorage
          </span>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-12 lg:flex" justify="center">
        {NavigationItem.map((item: NavigationItemType, index: number) => (
          <Link
            href={item.link}
            key={index}
            className="text-white text-md hover:underline hover:underline-offset-4">
            {item.name}
          </Link>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="flex lg:hidden">
        <RenderCase renderIf={!isAuthPage}>
          <Button
            as={Link}
            href="#"
            variant="solid"
            radius="sm"
            size="sm"
            className="bg-white text-darkblue-500 font-md">
            Sign In
          </Button>
        </RenderCase>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={
            isMenuOpen ? (
              <IoMdClose color="white" size={40} />
            ) : (
              <IoMdMenu color="white" size={40} />
            )
          }
          className="-mr-2"
        />
      </NavbarContent>
      <RenderCase renderIf={!isAuthPage}>
        <NavbarContent justify="end" className="hidden lg:flex">
          <Button
            as={Link}
            href="#"
            variant="flat"
            radius="sm"
            className="text-white font-md bg-darkblue-500">
            Sign In
          </Button>
          <Button
            as={Link}
            href="#"
            variant="solid"
            radius="sm"
            className="font-medium bg-white text-darkblue-500">
            Sign Up
          </Button>
        </NavbarContent>
      </RenderCase>
      <NavbarMenu className="gap-4 pt-10 font-medium bg-opacity-90 bg-darkblue-500 no-scrollbar">
        <RenderCase renderIf={!isAuthPage}>
          <NavbarMenuItem>
            <Link
              className="text-lg text-white"
              href="#"
            >
              {"Sign Up"}
            </Link>
          </NavbarMenuItem>
        </RenderCase>
        {NavigationItem.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="text-lg text-white"
              href={item.link}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
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
    link: "/pricing",
  },
];