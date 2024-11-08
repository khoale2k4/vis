"use client";
import { setShowRegister, setShowReset } from "@/store/action/authenPageSlice";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
interface userLogin {
        username: string;
        password: string;
}
export default function LoginForm() {
        const dispatch = useDispatch();
        const [type, setType] = useState('password');
	const handleToggle = () => {
		if (type==='password'){
		   setType('text');
		} else {
		   setType('password');
		}
	 };
        const [LoginInfo, setLoginInfo] =useState<userLogin>({
                username:"",
                password:"",
        });
	return (
        <form
        className="h-full animate-appear_right_smooth w-full text-black  flex flex-col items-center"
        action=""
        method="POST"
        onSubmit={() => {}}
        >
                <h1 className="font-bold text-5xl">
                        Hi,
                </h1>
                <div className="relative w-full mt-10">
                        <input
                                id="username"
                                name="username"
                                type="text"
                                className="px-5 peer h-12 w-full rounded-lg border-1 bg-transparent  border-black text-black placeholder-transparent focus:outline-none focus:border-sky-700"
                                placeholder=""
                                value={LoginInfo.username}
                                onChange={(e) => {
                                        const newForm = e.target.value;
                                        const updatedFormValues = {
                                                ...LoginInfo,
                                                username: newForm,
                                        };
                                        setLoginInfo(updatedFormValues);
                                }}
                                required
                        />
                        <label
                                htmlFor="username"
                                className="absolute rounded-full px-2 tracking-wide left-2 -top-2.5 text-black text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 bg-white peer-focus:text-black peer-focus:text-sm">
                                        Username/email
                        </label>
                </div>
                <div className="mt-5 w-full relative gap-5 grid grid-cols-1">
                        <div className="w-full items-center flex gap-5">
                                <div
                                className="h-12 px-5 flex items-center w-full rounded-lg border-1 bg-transparent  border-black text-black"
                                >
                                <input
                                        name="password"
                                        id="password"
                                        type={type}
                                        placeholder=""
                                        className=" peer w-full placeholder-transparent focus:outline-none focus:border-sky-700"
                                        onChange={(e) => {
                                                const newForm = e.target.value;
                                                const updatedFormValues = {
                                                        ...LoginInfo,
                                                        password: newForm,
                                                };
                                                setLoginInfo(updatedFormValues);
                                        }}
                                        required
                                />
                                        {type === "text" ?
                                        <FaEye
                                        className="text-black cursor-pointer"
                                        size={20} onClick={handleToggle}/>:
                                        <FaEyeSlash
                                        className="text-black cursor-pointer"
                                        onClick={handleToggle} size={20}/>}
                                        <label
                                        htmlFor="password"
                                        className="absolute rounded-full px-2 tracking-wide left-2 -top-2.5 text-black text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 bg-white peer-focus:text-black peer-focus:text-sm">
                                        Password
                                </label>
                                </div>


                        {/* <p className="text-red-500 fixed mt-2 text-xxs sm:text-sm">{formErrors.phoneNumberEr}</p> */}
                        </div>
                        <div
                        onClick={() => {dispatch(setShowReset());}}
                        className="text-right cursor-pointer w-full underline text-darkblue-400 text-sm place-items-end">
                                Forgot password?
                        </div>
                </div>
                <div className="mt-5 w-full gap-5 relative grid grid-cols-1">
                        <button
                        className="bg-darkblue-500 active:scale-x-105 duration-150 text-white text-lg w-full h-12 rounded-lg"
                        >
                                Sign in
                        </button>
                        <span
                        className="text-center w-full text-sm place-items-end"
                        >
                                {"Don't have account? "}
                                <span
                                onClick={() => {dispatch(setShowRegister());}}
                                className="underline text-darkblue-400 cursor-pointer">
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