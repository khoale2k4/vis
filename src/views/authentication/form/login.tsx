"use client";

import { toast } from "sonner";
import Image from "next/image";
import CustomButton from "@/components/button";
import CustomInputField from "@/components/input";
import { loginInfo } from "@/services/alphastorage";
import React, { useState } from "react";

type LoginFields = {
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

export default function LoginForm({ setView }: AuthenticationFormProps) {
    const loginFields: Array<LoginFields> = [
        { id: "username", type: "text", placeholder: "Username", important: true, version: "2" },
        { id: "password", type: "password", placeholder: "Password", important: true, version: "2" },
    ];

    const [LoginInfo, setLoginInfo] = useState<loginInfo>({
        username: "",
        password: "",
    });

    const updateValue = (id: keyof loginInfo, value: string | string[]) => {
        setLoginInfo((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("hello")
        const handleLoginApi = async () => {
            const response = await fetch("/api/authentication/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: LoginInfo.username, password: LoginInfo.password }),
            });
            const jsonData = await response.json();
            console.log(jsonData)
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
            className="relative animate-appear_right_smooth !duration-700 w-full text-black flex flex-col items-center"
            method="POST"
            onSubmit={handleLogin}
        >
            <h1 className="font-bold text-5xl pb-5 whitespace-nowrap -mt-5">Welcome to VIStorage</h1>
            <div
                onClick={() => setView("register")}
                className="mt-10 mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-white border hover:cursor-pointer dark:bg-darkContainerPrimary">
                <button
                    className="flex items-center gap-2"
                >
                    <Image src="/authentication/VISLOGO-03.webp" alt="Your image" width={25} height={25} />
                    <span className="text-[14px] font-medium text-black dark:text-white font-sans">
                        Don't have an account?
                    </span>
                </button>
            </div>
            <div className="flex items-center gap-3 w-full">
                <div className="h-px w-full bg-gray-200" />
                <p className="text-base text-gray-600 dark:text-white">
                    {" "}
                    or{" "}
                </p>
                <div className="h-px w-full bg-gray-200" />
            </div>
            <div className="mt-4 flex items-center place-items-center">
                <p className="text-base w-full text-center font-bold dark:text-white font-sans">
                    {" "}
                    Sign in{" "}
                </p>
            </div>
            <div className="mt-8 gap-5 flex flex-col w-full">
                {loginFields.map(({ id, type, placeholder, version }: LoginFields) => (
                    <CustomInputField
                        key={id}
                        placeholder={placeholder}
                        id={id}
                        type={type}
                        value={LoginInfo[id]}
                        setValue={(value: string | string[]) => updateValue(id, value)}
                        version={version}
                        inputClassName="!border-gray-500 !rounded-lg"
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
            <div className="mt-10 w-full gap-5 relative flex flex-col">
                <CustomButton
                    type="submit"
                    version="2"
                    firstDisplayClassName="!bg-darkblue-500 active:scale-x-105 duration-150 !text-white text-lg !w-full h-12 !rounded-lg"
                    secondDisplayClassName="!bg-orangelogo-500"
                >
                    Sign in
                </CustomButton>
            </div>
        </form>
    );
}