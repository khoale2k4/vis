"use client";
import Image from "next/image";
import LoginForm from "./form/login";
import RegisterForm from "./form/register";
import { ResetForm } from "./form/forgotPassword";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
export default function AuthView() {
        const show = useSelector((state: RootState) => state.login.show);
	return (
        <div className="w-screen h-screen flex lg:flex-row flex-col items-center gap-10">
                <div className ="w-full h-32 rounded-full relative block lg:hidden">
                        <Image
                        src="/authentication/AlphaSolutions.webp"
                        alt="AlphaSolutions"
                        fill
                        className="w-full h-full  top-0 left-0 object-cover"
                        />
                </div>
                <div className=" bg-white h-1/2 w-full flex-1 px-10 lg:px-28 flex justify-center items-center">
                        {show === 'login' && < LoginForm /> }
                        {show === 'register' && < RegisterForm /> }
                        {show === 'reset' && < ResetForm />}
                </div>
                <div className ="w-1/2 h-full relative hidden lg:block">
                        <Image
                        src="/authentication/AlphaSolutions.webp"
                        alt="AlphaSolutions"
                        fill
                        className="w-full h-full top-0 left-0 object-cover"
                        />
                </div>
        </div>
	);
}