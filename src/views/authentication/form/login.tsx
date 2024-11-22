"use client";

import CustomButton from "@/components/button";
import CustomInputField from "@/components/input";
<<<<<<< HEAD
import { loginInfo } from "@/services/alphastorage";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "sonner";

=======
import React, { Dispatch, SetStateAction, useState } from "react";
interface userLogin {
	username: string;
	password: string;
}
>>>>>>> main
interface Props {
  setView: Dispatch<SetStateAction<"login" | "register" | "reset">>;
}

type LoginFields = {
<<<<<<< HEAD
  placeholder: string;
  id: keyof loginInfo;
  type: InputTypes;
  important?: boolean;
  version?: TextInputVersion | SelectInputVersion;
  select_type?: SelectInputType;
  options?: SelectInputOptionFormat[];
  isClearable?: boolean;
  state?: InputState;
  dropdownPosition?: DropdownPosition;
  onChange?: (_id: keyof { pass: string; passCheck: string }, _value: string) => void;
};

export default function LoginForm({ setView }: Props) {
  const loginFields: Array<LoginFields> = [
    { id: "username", type: "text", placeholder: "Username", important: true, version: "2" },
    { id: "password", type: "password", placeholder: "Password", important: true, version: "2" },
  ];

  const [LoginInfo, setLoginInfo] = useState<loginInfo>({
    username: "",
    password: "",
  });
=======
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
>>>>>>> main

  const updateValue = (id: keyof loginInfo, value: string | string[]) => {
    setLoginInfo((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const handleLoginApi = async () => {
      const response = await fetch("/api/authentication/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: LoginInfo.username, password: LoginInfo.password }),
      });
      const jsonData = await response.json();
      return jsonData;
    };

    toast.promise(handleLoginApi(), {
      loading: "Loading",
      success: (res) => {
        if (res.success) {
          return res.message;
        } else {
          throw new Error(res.message);
        }
      },
      error: (err) => err.message,
    });
  };

  return (
    <form
      className="h-fit relative animate-appear_right_smooth w-full rounded-xl shadow-xl text-black bg-white flex flex-col items-center p-20 py-24"
      method="POST"
      onSubmit={handleLogin}
    >
      <h1 className="font-bold text-5xl animate-wobble">Hi there,</h1>
      <div className="mt-10 gap-5 flex flex-col w-full">
        {loginFields.map(({ id, type, placeholder, version }: LoginFields) => (
          <CustomInputField
            key={id}
            placeholder={placeholder}
            id={id}
            type={type}
            value={LoginInfo[id]}
            setValue={(value: string | string[]) => updateValue(id, value)}
            version={version}
            inputClassName="!border-gray-500"
          />
        ))}
      </div>
      <div className="mt-2 w-full relative grid grid-cols-1">
        <div
          onClick={() => setView("reset")}
          className="text-right font-extralight cursor-pointer w-full hover:underline text-darkblue-400 text-medium place-items-end"
        >
          Forgot password?
        </div>
      </div>
      <div className="mt-20 w-full gap-5 relative flex flex-col">
        <CustomButton
          type="submit"
          version="2"
          firstDisplayClassName="!bg-darkblue-500 active:scale-x-105 duration-150 !text-white text-lg !w-full h-12 rounded-lg"
          secondDisplayClassName="!bg-orangelogo-500 !rounded-lg"
        >
          Sign up
        </CustomButton>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-40 h-1 my-5 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 font-semibold">OR</div>
        </div>
        <span className="text-center font-extralight w-full text-medium place-items-end">
          {"Don't have account? "}
          <span
            onClick={() => setView("register")}
            className="hover:underline text-darkblue-400 cursor-pointer"
          >
            {"Register now"}
          </span>
        </span>
        <a 
        href="/"
        className="group relative hover:cursor-pointer inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-extralight text-black duration-500">
            <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
              Get back to home page
            </div>
            <div className="absolute flex items-center  group-active:scale-110 translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
              <FaArrowLeft /> Get back to home page
            </div>
        </a>
      </div>
      
    </form>
  );
}