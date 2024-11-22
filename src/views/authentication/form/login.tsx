"use client";
import CustomButton from "@/components/button";
import CustomInputField from "@/components/input";
import { useNotifications } from "@/hooks/NotificationsProvider";
import { loginInfo } from "@/services/alphastorage";
import axios from "axios";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";
interface Props {
	setView: Dispatch<SetStateAction<"login" | "register" | "reset">>;
}
type LoginFields = {
	placeholder: string,
	id: keyof loginInfo ,
	type: InputTypes,
	important?: boolean,
	version?: TextInputVersion | SelectInputVersion,
	select_type?: SelectInputType,
	options?: SelectInputOptionFormat[],
	isClearable?: boolean,
	state?: InputState,
	dropdownPosition?: DropdownPosition;
	onChange?: (_id: keyof { pass: string; passCheck: string }, _value: string) => void,
}
export default function LoginForm({ setView }: Props) {
	const { addNotification } = useNotifications();
	const loginFields: Array<LoginFields> = [
		{ id: "username", type: 'text', placeholder: "Username", important: true, version:  '2'},
		{ id: "password", type: 'password', placeholder: "Password", important: true, version: '2' },
	];
	const [LoginInfo, setLoginInfo] = useState<loginInfo>({
		username: "",
		password: "",
	});
	const updateValue = (id: keyof loginInfo , value: string | string[]) => {
		setLoginInfo(prevData => ({ ...prevData, [id]: value }));
	};
	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		const handleLoginApi =async ()=>{
			const response = await fetch('/api/authentication/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username: LoginInfo.username, password: LoginInfo.password }),
			});
			const jsonData = await response.json();
			return jsonData;
		}
		toast.promise(
		handleLoginApi, 
		{
			loading: "Loading",
			success: (res) => {
				if (res.success)
					return res.message;
				else throw Error(res.message)
			},
			error: (err) => {return err.message},
		});
	};
	return (
		<form
			className="h-fit animate-appear_right_smooth w-full rounded-xl
        shadow-xl text-black bg-white flex flex-col items-center p-20 py-24"
			action=""
			method="POST"
			onSubmit={handleLogin}
		>
			<h1 className="font-bold text-5xl animate-wobble">
				Hi there,
			</h1>
			<div className="mt-10 gap-5 flex flex-col w-full ">
				{loginFields.map(({ id, type, placeholder, version }: LoginFields) => (
					<CustomInputField
						placeholder={placeholder}
						id={id}
						key={id}
						type={type}
						value={LoginInfo[id as keyof loginInfo ]}
						setValue={(value: string | string[]) => updateValue(id as keyof loginInfo , value)}
						version={version}
						inputClassName="!border-gray-500"
					/>
				))}
			</div>
			<div className="mt-2 w-full relative grid grid-cols-1">
				<div
					onClick={() => { setView("reset"); }}
					className="text-right font-extralight cursor-pointer w-full hover:underline
                        text-darkblue-400 text-medium place-items-end">
					Forgot password?
				</div>
			</div>

			<div className="mt-20 w-full gap-5 relative flex flex-col">
				<CustomButton
					type="submit"
					version="2"
					firstDisplayClassName="!bg-darkblue-500 active:scale-x-105 duration-150
						!text-white text-lg !w-full h-12 rounded-lg"
					secondDisplayClassName="!bg-orangelogo-500 !rounded-lg"
				>
					Sign up
				</CustomButton>
				<div className="inline-flex items-center justify-center w-full">
					<hr className="w-40 h-1 my-5 bg-gray-200 border-0 rounded dark:bg-gray-700" />
					<div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 font-semibold">
						OR
					</div>
				</div>
				<span
					className="text-center font-extralight w-full text-medium  place-items-end"
				>
					{"Don't have account? "}
					<span
						onClick={() => { setView("register"); }}
						className="hover:underline text-darkblue-400 cursor-pointer">
						{"Register now"}
					</span>
				</span>
				{/* <p className="text-red-500 fixed mt-2 text-xxs sm:text-sm">{formErrors.phoneNumberEr}</p> */}
			</div>

			{/* <p className="text-red-500  mt-5 text-xxs sm:text-sm">{error}</p> */}
			{/* <button type="submit" className="mt-5 relative bg-blue-900 px-4 py-2 rounded-full w-2/3 text-white text-sm md:text-xl">Đăng nhập</button> */}
		</form>
	);
}