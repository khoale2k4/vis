"use client";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";

export default function PublicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className="fixed top-0 z-50 flex py-2 bg-darkblue-500"
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Link href="/" className="flex gap-2 lg:gap-4 justify-center place-items-center">
          <div className="bg-white rounded-full size-8 lg:size-12 brand_icon"></div>
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
        <Button
          as={Link}
          href="#"
          variant="solid"
          radius="sm"
          size="sm"
          className="bg-white text-darkblue-500 font-md">
          Sign In
        </Button>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={
            isMenuOpen ? (
              <IoMdClose color="white" size={40} />
            ) : (
              <IoMdMenu color="white" size={40} />
            )
          }
        />
      </NavbarContent>
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
      <NavbarMenu className="gap-4 pt-10 font-medium bg-opacity-90 bg-darkblue-500">
        <NavbarMenuItem>
          <Link
            className="text-lg text-white"
            href="#"
          >
            {"Sign Up"}
          </Link>
        </NavbarMenuItem>
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
