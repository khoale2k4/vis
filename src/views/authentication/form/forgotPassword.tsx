"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch} from 'react-redux';
import { setShowLogin} from '@/store/action/authenPageSlice';
interface ResetPassInfo {
    email: string;
}
export function ResetForm() {
	const dispatch = useDispatch();
	const [type, setType] = useState('password');
	const handleToggle = () => {
		if (type==='password'){
		   setType('text');
		} else {
		   setType('password');
		}
	 };
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [ResetPassInfo, setResetPassInfo] = useState<ResetPassInfo>({
        email: "",
    });
    const [show, setShow] =useState(false);
    const [otp, setOtp] =useState("");
    const [showResetPass, setShowResetPass]=useState(false);
    const [pass, setPass]=useState("");
    const [passCheck, setPassCheck]=useState("");
    const [seconds, setSeconds] = useState(60);
    const [isStarted, setIsStarted] =useState(false);
	const t= useTranslations("LogPage");

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isStarted) {
          interval = setInterval(() => {
            if (seconds > 0) {
              setSeconds(seconds - 1);
            } else {
              clearInterval(interval);
            }
          }, 1000);
        }
        return () => clearInterval(interval);
      }, [seconds, isStarted]);


    const handleResend =() => {
		setSeconds(60);
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault () ;
        setShow(!show);
        setIsStarted(true);
    };
    const handleChangePass =async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (pass !== passCheck)
			{
				return;
			}
            // setShowback(false)
    };
    const handleSubmitOtp = async (e: FormEvent<HTMLFormElement>) => {
        ////console.log(userId)
        // console.log(verifyPayload)
		// setShowResetPass(true)
		e.preventDefault();
        setShowResetPass(true)
    };
    return (
		<div className=" w-2/3 mt-8 text-black  flex flex-col items-center">
			<form
				className={`w-full  z-50 top-0 left-0 ${!show ? "animate-appear_right_smooth" : "animate-disappear_left_smooth hidden"} w-full bg-white text-black flex flex-col gap-5 items-center`}
				action=""
				method="POST"
				onSubmit={handleSubmit}>
				<span className="text-xl font-semibold  text-center">
					Let us know your email
				</span>

				<div className="relative w-full">
					<input
						id="email"
						name="email"
						type="email"
						className="px-5 peer h-12 w-full rounded-lg border-1 bg-transparent  border-black text-black placeholder-transparent focus:outline-none focus:border-sky-700"
						placeholder=""
						value={ResetPassInfo.email}
						onChange={(e) => {
								const newForm = e.target.value;
								const updatedFormValues = {
										...ResetPassInfo,
										email: newForm,
								};
								setResetPassInfo(updatedFormValues);
						}}
						required
					/>
					<label
						htmlFor="email"
						className="absolute rounded-full px-2 tracking-wide left-2 -top-2.5 text-black text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 bg-white peer-focus:text-black peer-focus:text-sm">
							Email
					</label>
                </div>

				<button
					type="submit"
                    className="bg-darkblue-500 active:scale-x-105 duration-150 text-white text-lg w-full h-12 rounded-lg"
                >
                        Send otp
                </button>
				<button
					onClick={() => {
						// setShow(!show);
						// setShowback(false)
						dispatch(setShowLogin())
					}}
                    className="bg-darkblue-500 active:scale-x-105 duration-150 text-white text-lg w-full h-12 rounded-lg"
                >
                        Get back to login
                </button>
			</form>

			<form
				className={`top-0  left-0 z-10 h-full w-full 
				${show && !showResetPass? "animate-appear_right_smooth" : "animate-disappear_left_smooth hidden"} text-black flex 
				flex-col gap-5 items-center`}
				onSubmit={handleSubmitOtp}
			>
				<span className="mt-10 text-2xl font-semibold  text-center">
					Verify Otp
				</span>

				<div className="relative w-full">
					<input
						id="otp"
						name="otp"
						type="otp"
						className="px-5 peer h-12 w-full rounded-lg border-1 bg-transparent  border-black text-black placeholder-transparent focus:outline-none focus:border-sky-700"
						placeholder=""
						value={otp}
						onChange={(e) => {
								const newForm = e.target.value;
								setOtp(newForm);
						}}
						required
					/>
					<label
						htmlFor="email"
						className="absolute rounded-full px-2 tracking-wide left-2 -top-2.5 text-black text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 bg-white peer-focus:text-black peer-focus:text-sm">
							OTP
					</label>
                </div>

				<button
					type="submit"
                    className="bg-darkblue-500 active:scale-x-105 duration-150 text-white text-lg w-full h-12 rounded-lg"
                >
                        Verify otp
                </button>
				<div className="mt-10 flex gap-1 items-center">
					{isStarted && <div className=" text-xxs sm:text-sm">{"Remaining time"} {seconds} {"seconds"}</div>}
					<button
						onClick={() => {
							handleResend();
						}}
						disabled={seconds > 0}
						className=" disabled:hidden active:scale-x-105 duration-150 text-xxs sm:text-sm underline text-blue-400 ">
						{seconds > 0 ? "Sent" : "Resent"}
					</button>
				</div>
			</form>

			<form
			action=""
			method="POST"
			onSubmit={handleChangePass}
			className={` top-0  left-0 z-20 h-full w-full ${showResetPass ? "animate-appear_right_smooth" : "hidden"} text-black flex flex-col items-center gap-5`}>
				<span className="mt-10 text-xl font-semibold  text-center">
                {"That's you"}
				</span>
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
									setPass(e.target.value)
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
								New password
						</label>
						</div>
					</div>
				</div>
				<div className="w-full relative gap-5 grid grid-cols-1">
					<div className="w-full items-center flex gap-5">
						<div
							className="h-12 px-5 flex items-center w-full rounded-lg border-1 bg-transparent  border-black text-black"
							>
						<input
								name="verifypass"
								id="verifypass"
								type={type}
								placeholder=""
								className=" peer w-full placeholder-transparent focus:outline-none focus:border-sky-700"
								onChange={(e) => {
									setPassCheck(e.target.value);
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
								htmlFor="verifypass"
								className="absolute rounded-full px-2 tracking-wide left-2 -top-2.5 text-black text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 bg-white peer-focus:text-black peer-focus:text-sm">
								{"Verify your password"}
						</label>
						</div>
					</div>
				</div>
				
				<button
					type="submit"
                    className="bg-darkblue-500 active:scale-x-105 duration-150 text-white text-lg w-full h-12 rounded-lg"
                >
                        Confirm
                </button>
				<button
				onClick={() => {
					// setShow(!show);
					// setShowback(false)
					dispatch(setShowLogin())
				}}
				className="bg-darkblue-500 active:scale-x-105 duration-150 cursor-pointer text-center text-white text-lg w-full h-12 rounded-lg"	
				>
					Get back to login
				</button>
			</form>
		</div>
	);
}