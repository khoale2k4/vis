"use client";
import CustomInputField from "@/components/input";
import { Dispatch, SetStateAction, useState } from "react";
interface userRegister {
	fullname: string;
	username: string;
	phonenum: string;
	email: string;
	password: string;
}
interface Props {
	setView: Dispatch<SetStateAction<"login" | "register" | "reset">>;
}
type RegisterFields = {
	placeholder: string,
	id: keyof userRegister,
	type: InputTypes,
	important?: boolean,
	version?: TextInputVersion | SelectInputVersion,
	select_type?: SelectInputType,
	options?: SelectInputOptionFormat[],
	isClearable?: boolean,
	state?: InputState,
	dropdownPosition?: DropdownPosition;
	onChange?: (_id: keyof userRegister, _value: string) => void,
}
export default function RegisterForm({ setView }: Props) {
	const registerFields: Array<RegisterFields> = [
		{ id: "fullname", type: "text", placeholder: "Fullname", important: true, version: "2" },
		{ id: "email", type: "email", placeholder: "Email", important: true, version: "2" },
		{ id: "phonenum", type: "text", placeholder: "Phone No.", important: true, version: "2" },
		{ id: "username", type: "text", placeholder: "Username", important: true, version: "2" },
		{ id: "password", type: "password", placeholder: "Password", important: true, version: "2" },
	];
	const [RegisterInfo, setRegisterInfo] = useState<userRegister>({
		fullname: "",
		username: "",
		phonenum: "",
		email: "",
		password: "",
	});
	const updateValue = (id: keyof userRegister, value: string | string[]) => {
		setRegisterInfo(prevData => ({ ...prevData, [id]: value }));
	};
	return (
		<form
			className="h-fit animate-appear_right_smooth w-full rounded-xl
        	shadow-xl text-black bg-white flex flex-col items-center p-20 py-24"
			action=""
			method="POST"
			onSubmit={() => { }}
		>
			<h1 className="flex flex-col text-5xl font-bold">
				Sign up
			</h1>
			<div className="mt-10 flex flex-col gap-5 w-full">
				{registerFields.map(({ id, type, placeholder, version, isClearable, options, select_type, dropdownPosition }: RegisterFields) => (
					<CustomInputField
						placeholder={placeholder}
						id={id}
						key={id}
						type={type}
						value={RegisterInfo[id as keyof userRegister]}
						setValue={(value: string | string[]) => updateValue(id as keyof userRegister, value)}
						version={version}
						options={options}
						select_type={select_type}
						isClearable={isClearable}
						dropdownPosition={dropdownPosition}
						inputClassName="!border-gray-500"
					/>
				))}
			</div>
			<div className="mt-5 w-full gap-5 relative grid grid-cols-1">
				<button
					className="bg-darkblue-500 active:scale-x-105 duration-150 text-white text-lg w-full h-12 rounded-lg"
				>
					Register
				</button>
				<span
					className="text-center w-full font-extralight text-medium place-items-end"
				>
					{"Already have account? "}
					<span
						onClick={() => { setView("login"); }}
						className="underline cursor-pointer text-darkblue-400">
						{"Login now"}
					</span>
				</span>
			</div>
		</form>
	);
}