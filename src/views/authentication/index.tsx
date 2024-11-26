"use client";

import { useEffect } from "react";
import LoginForm from "./form/login";
import RegisterForm from "./form/register";
import { FaArrowLeft } from "react-icons/fa";
import { ResetForm } from "./form/forgotPassword";
import { useAuthentication } from "@/hooks/AuthenticationProvider";

export default function AuthView() {
	const { authenticationState, setAuthenticationState } = useAuthentication();

	useEffect(() => {
		return () => {
			setAuthenticationState("login");
		};
	}, []);

	return (
		<div className=" bg-lightContainerPrimary w-screen h-screen flex flex-col overflow-hidden justify-center items-center">
			<div className="lg:!rounded-2xl shadow-md h-full lg:h-fit lg:max-h-[calc(100dvh-20px)]
			overflow-y-auto no-scrollbar grid place-items-center lg:w-fit lg:min-w-[680px] lg:max-w-[680px] bg-white w-full p-10 md:p-20">
				{authenticationState === 'login' && <LoginForm setView={setAuthenticationState} />}
				{authenticationState === 'register' && <RegisterForm setView={setAuthenticationState} />}
				{authenticationState === 'reset' && <ResetForm setView={setAuthenticationState} />}
				<div className="-mb-[60px] mt-4">
					<a href="/" className="group relative hover:cursor-pointer inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-extralight text-black duration-500">
						<div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
							Get back to home page
						</div>
						<div className="absolute flex items-center gap-1 group-active:scale-110 translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
							<FaArrowLeft className="w-3 h-3 mb-0.5" />
							Get back to home page
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}