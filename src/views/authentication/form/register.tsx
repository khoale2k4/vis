"use client";
import { setShowLogin } from "@/store/action/authenPageSlice";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
interface userRegister {
        fullname: string;
        username: string;
        phonenum: string;
        email: string;
        password: string;
}
export default function RegisterForm() {
        const dispatch = useDispatch();
        const [type, setType] = useState('password');
	const handleToggle = () => {
		if (type==='password'){
		   setType('text');
		} else {
		   setType('password');
		}
	 };
        const [RegisterInfo, setRegisterInfo] =useState<userRegister>({
                fullname: "",
                username: "",
                phonenum: "",
                email: "",
                password: "",
        });
	return (
        <form
        className="h-full animate-appear_right_smooth w-full text-black  flex flex-col items-center"
        action=""
        method="POST"
        onSubmit={() => {}}
        >
                <h1 className="flex flex-col text-5xl font-bold">
                        Sign up
                </h1>
                <div className="mt-10 flex flex-col gap-5 w-full">
                        <div className="relative w-full">
                                <input
                                        id="fullname"
                                        name="fullname"
                                        type="text"
                                        className="px-5 peer h-12 w-full rounded-lg border-1 bg-transparent  border-black text-black placeholder-transparent focus:outline-none focus:border-sky-700"
                                        placeholder=""
                                        value={RegisterInfo.fullname}
                                        onChange={(e) => {
                                                const newForm = e.target.value;
                                                const updatedFormValues = {
                                                        ...RegisterInfo,
                                                        fullname: newForm,
                                                };
                                                setRegisterInfo(updatedFormValues);
                                        }}
                                        required
                                />
                                <label
                                        htmlFor="fullname"
                                        className="absolute rounded-full px-2 tracking-wide left-2 -top-2.5 text-black text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 bg-white peer-focus:text-black peer-focus:text-sm">
                                                Fullname
                                </label>
                        </div>
                        <div className="relative w-full">
                                <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        className="px-5 peer h-12 w-full rounded-lg border-1 bg-transparent  border-black text-black placeholder-transparent focus:outline-none focus:border-sky-700"
                                        placeholder=""
                                        value={RegisterInfo.username}
                                        onChange={(e) => {
                                                const newForm = e.target.value;
                                                const updatedFormValues = {
                                                        ...RegisterInfo,
                                                        username: newForm,
                                                };
                                                setRegisterInfo(updatedFormValues);
                                        }}
                                        required
                                />
                                <label
                                        htmlFor="username"
                                        className="absolute rounded-full px-2 tracking-wide left-2 -top-2.5 text-black text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 bg-white peer-focus:text-black peer-focus:text-sm">
                                                Username
                                </label>
                        </div>
                        <div className="relative w-full">
                                <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="px-5 peer h-12 w-full rounded-lg border-1 bg-transparent  border-black text-black placeholder-transparent focus:outline-none focus:border-sky-700"
                                        placeholder=""
                                        value={RegisterInfo.email}
                                        onChange={(e) => {
                                                const newForm = e.target.value;
                                                const updatedFormValues = {
                                                        ...RegisterInfo,
                                                        email: newForm,
                                                };
                                                setRegisterInfo(updatedFormValues);
                                        }}
                                        required
                                />
                                <label
                                        htmlFor="email"
                                        className="absolute rounded-full px-2 tracking-wide left-2 -top-2.5 text-black text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 bg-white peer-focus:text-black peer-focus:text-sm">
                                                Email
                                </label>
                        </div>
                        <div className="relative w-full">
                                <input
                                        id="tel"
                                        name="tel"
                                        type="tel"
                                        className="px-5 peer h-12 w-full rounded-lg border-1 bg-transparent  border-black text-black placeholder-transparent focus:outline-none focus:border-sky-700"
                                        placeholder=""
                                        value={RegisterInfo.phonenum}
                                        onChange={(e) => {
                                                const newForm = e.target.value;
                                                const updatedFormValues = {
                                                        ...RegisterInfo,
                                                        phonenum: newForm,
                                                };
                                                setRegisterInfo(updatedFormValues);
                                        }}
                                        required
                                />
                                <label
                                        htmlFor="tel"
                                        className="absolute rounded-full px-2 tracking-wide left-2 -top-2.5 text-black text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 bg-white peer-focus:text-black peer-focus:text-sm">
                                                Phone number
                                </label>
                        </div>
                        <div className="w-full relative gap-5 grid grid-cols-1">
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
                                                                ...RegisterInfo,
                                                                password: newForm,
                                                        };
                                                        setRegisterInfo(updatedFormValues);
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
                        </div>
                </div>
                <div className="mt-5 w-full gap-5 relative grid grid-cols-1">
                        <button
                        className="bg-darkblue-500 active:scale-x-105 duration-150 text-white text-lg w-full h-12 rounded-lg"
                        >
                                Register
                        </button>
                        <span
                        className="text-center w-full text-sm place-items-end"
                        >
                                {"Already have account? "}
                                <span
                                onClick={() => {dispatch(setShowLogin());}}
                                className="underline cursor-pointer text-darkblue-400">
                                        {"Login now"}
                                </span>
                        </span>
                        {/* <p className="text-red-500 fixed mt-2 text-xxs sm:text-sm">{formErrors.phoneNumberEr}</p> */}
                </div>
        </form>
	);
}