"use client";
import LoginForm from "./form/login";
import RegisterForm from "./form/register";
import { ResetForm } from "./form/forgotPassword";
import { useState } from "react";
import Image from "next/image";
export default function AuthView() {
    const [view, setView] = useState<'login' | 'register' | 'reset'>('login');
    return (
        <div className=" bg-lightContainerPrimary w-screen h-screen grid place-items-center">
			<div className="w-full h-32 rounded-full relative block lg:hidden">
				<Image
					src="/authentication/AlphaSolutions.webp"
					alt="AlphaSolutions"
					fill
					className="w-full h-full  top-0 left-0 object-cover"
				/>
			</div>
			<div className=" grid place-items-center lg:w-1/3 w-full">
				{view === 'login' && < LoginForm setView={setView} />}
				{view === 'register' && < RegisterForm setView={setView} />}
				{view === 'reset' && < ResetForm setView={setView} />}
			</div>
			{/* <div className="w-1/2 h-full relative hidden lg:block">
				<Image
					src="/authentication/AlphaSolutions.webp"
					alt="AlphaSolutions"
					fill
					className="w-full h-full top-0 left-0 object-cover"
				/>
			</div> */}
		</div>

    );
}