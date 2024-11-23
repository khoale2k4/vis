"use client";
import LoginForm from "./form/login";
import RegisterForm from "./form/register";
import { ResetForm } from "./form/forgotPassword";
import { useState } from "react";
import Image from "next/image";
export default function AuthView() {
    const [view, setView] = useState<'login' | 'register' | 'reset'>('login');
    return (
        <div className=" bg-lightContainerPrimary w-screen h-screen flex flex-col overflow-hidden justify-center items-center">
			<div className="w-full h-32 rounded-full relative block lg:hidden">
				<Image
					src="/authentication/VISLOGO.webp"
					alt="VIstorage"
					fill
					className="w-full h-full  top-0 left-0 object-cover"
				/>
			</div>
			<div className="rounded-xl shadow-xl h-[calc(100vh-8rem)] lg:h-fit grid place-items-center lg:w-1/3 bg-white w-full p-20 lg:py-24">
				{view === 'login' && < LoginForm setView={setView} />}
				{view === 'register' && < RegisterForm setView={setView} />}
				{view === 'reset' && < ResetForm setView={setView} />}
			</div>
		</div>

    );
}