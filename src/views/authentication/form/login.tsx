"use client";
import CustomButton from "@/components/button";
import CustomInputField from "@/components/input";
import React, { Dispatch, SetStateAction, useState } from "react";
interface userLogin {
	username: string;
	password: string;
}
interface Props {
	setView: Dispatch<SetStateAction<"login" | "register" | "reset">>;
}
type LoginFields = {
	placeholder: string,
	id: keyof userLogin,
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
	const loginFields: Array<LoginFields> = [
		{ id: "username", type: "text", placeholder: "Username", important: true, version: "2" },
		{ id: "password", type: "password", placeholder: "Password", important: true, version: "2" },
	];
	const [LoginInfo, setLoginInfo] = useState<userLogin>({
		username: "",
		password: "",
	});
	const updateValue = (id: keyof userLogin, value: string | string[]) => {
		setLoginInfo(prevData => ({ ...prevData, [id]: value }));
	};
	return (
		<form
			className="h-full animate-appear_right_smooth w-full rounded-xl
        	shadow-xl text-black bg-white flex flex-col justify-center place-items-center px-10 sm:px-20 md:px-44 lg:px-20 xl:px-36 py-10"
			action=""
			method="POST"
			onSubmit={(e) => { e.preventDefault(); }}
		>
			<h1 className="font-bold text-5xl animate-wobble">
				Welcome,
			</h1>
			<div className="mt-16 lg:mt-20 xl:mt-32 gap-5 flex flex-col w-full">
				{loginFields.map(({ id, type, placeholder, version }: LoginFields) => (
					<CustomInputField
						placeholder={placeholder}
						id={id}
						key={id}
						type={type}
						value={LoginInfo[id as keyof userLogin]}
						setValue={(value: string | string[]) => updateValue(id as keyof userLogin, value)}
						version={version}
						inputClassName="!border-gray-500"
					/>
				))}
			</div>
			<div className="mt-2 w-full relative grid grid-cols-1">
				<div
					onClick={() => { setView("reset"); }}
					className="text-right cursor-pointer w-full hover:underline
                        text-darkblue-400 text-medium place-items-end font-medium">
					Forgot password?
				</div>
			</div>

			<div className="mt-10 w-full gap-2 relative flex flex-col">
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
					<hr className="w-40 h-[1px] my-5 bg-gray-300 border-0 rounded dark:bg-gray-700" />
					<div className="absolute px-4 -translate-x-1/2 bg-white left-1/2">
						or
					</div>
				</div>
				<span
					className="text-center font-medium w-full text-medium  place-items-end"
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