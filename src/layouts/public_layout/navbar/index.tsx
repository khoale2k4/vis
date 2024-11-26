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
import { useRouter } from "next/navigation";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useAuthentication } from "@/hooks/AuthenticationProvider";

export default function PublicNavbar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { setAuthenticationState } = useAuthentication();

    const handleSignIn = () => {
        setAuthenticationState("login");
        router.push("/authentication");
    };

    const handleSignUp = () => {
        setAuthenticationState("register");
        router.push("/authentication");
    };

    return (
        <Navbar
            shouldHideOnScroll
            maxWidth="full"
            className={`fixed top-0 z-50 flex bg-darkblue-500`}
            onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <Link href="/" className="flex gap-4 justify-center place-items-center">
                    <div className={`bg-white rounded-full brand_icon size-10 -ml-3 lg:ml-0`}></div>
                    <span className="text-xl font-bold text-white lg:text-2xl">
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
                    onPress={handleSignIn}
                    variant="solid"
                    radius="sm"
                    className="h-9 !min-w-10 bg-white text-darkblue-500 font-md">
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
                    className="-mr-2"
                />
            </NavbarContent>
            <NavbarContent justify="end" className="hidden lg:flex -mr-3.5">
                <Button
                    onPress={handleSignIn}
                    variant="flat"
                    radius="sm"
                    className="text-white font-md bg-darkblue-500">
                    Sign In
                </Button>
                <Button
                    onPress={handleSignUp}
                    variant="solid"
                    radius="sm"
                    className="font-medium bg-white text-darkblue-500">
                    Sign Up
                </Button>
            </NavbarContent>
            <NavbarMenu className="gap-4 pt-6 font-medium bg-opacity-90 bg-darkblue-500 no-scrollbar">
                <NavbarMenuItem>
                    <Button
                        onPress={handleSignUp}
                        variant="light"
                        radius="sm"
                        className="text-lg text-white">
                        Sign Up
                    </Button>
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
};

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