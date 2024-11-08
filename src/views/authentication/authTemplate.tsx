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
        <div className="w-screen h-screen flex ">
                <div className=" bg-white w-1/2 p-28 grid place-items-center">
                        {show === 'login' && <LoginForm/> }
                        {show === 'register' &&  <RegisterForm/> }
                        {show === 'reset' &&  <ResetForm/>}
                </div>
                <div className ="w-1/2 h-full relative">
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