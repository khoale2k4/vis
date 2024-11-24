"use client";
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import Typewriter from "@/components/effect/textGenerateEffect";
import CustomInputField from "@/components/input";
import { IoMdArrowRoundBack } from "react-icons/io";
import CustomButton from "@/components/button";
interface infoToReset {
	email: string;
}
interface Props {
	setView: Dispatch<SetStateAction<"login" | "register" | "reset">>;
}
type ResetPassFields = {
	placeholder: string,
	id: keyof { pass: string; passCheck: string },
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
export function ResetForm({ setView }: Props) {

	const resetPassFields: Array<ResetPassFields> = [
		{ id: "pass", type: "password", placeholder: "Your new password", important: true, version: "2" },
		{ id: "passCheck", type: "password", placeholder: "Recheck your password", important: true, version: "2" },
	];
	const [showFirstForm, setShowFirstForm] = useState(false);
	const [showSecondForm, setShowSecondForm] = useState(false);
	const [otp, setOtp] = useState("");
	const [resetPass, setResetPass] = useState<{ pass: string; passCheck: string }>
		({
			pass: "",
			passCheck: "",
		});
	const [secondsCountdown, setSecondsCountdown] = useState(60);
	const [isCountDownStarted, setIsCountDownStarted] = useState(false);
	const [infoToReset, setInfoToReset] = useState<infoToReset>({
		email: "",
	});

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (isCountDownStarted) {
			interval = setInterval(() => {
				if (secondsCountdown > 0) {
					setSecondsCountdown(secondsCountdown - 1);
				} else {
					clearInterval(interval);
				}
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [secondsCountdown, isCountDownStarted]);

	const handleResend = () => {
		setSecondsCountdown(60);
	};
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setShowFirstForm(!showFirstForm);
		setIsCountDownStarted(true);
	};
	const handleChangePass = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (resetPass.pass!== resetPass.passCheck) {
			return;
		}
		// setShowback(false)
	};
	const handleSubmitOtp = async (e: FormEvent<HTMLFormElement>) => {
		////console.log(userId)
		// console.log(verifyPayload)
		// setShowSecondForm(true)
		e.preventDefault();
		setShowSecondForm(true);
	};
	return (
		<div className="animate-appear_right_smooth w-full text-black ">
			<form
				className={`z-50 top-0 left-0 ${!showFirstForm ? "animate-appear_right_smooth" : "animate-disappear_left_smooth hidden"} 
				w-full gap-5 text-black  flex flex-col items-center `}
				action=""
				method="POST"
				onSubmit={handleSubmit}>
				<span className="text-xl font-semibold  text-center">
					<Typewriter text="Let us know your email" delay={50} />
				</span>

				<div className="relative w-full">
					<CustomInputField
						placeholder={"Email"}
						id={"email"}
						key={"email"}
						type={"email"}
						value={infoToReset.email}
						setValue={(value: string) => setInfoToReset(prevData => ({ ...prevData, email: value }))}
						version={"2"}
						inputClassName="!border-gray-500"
					/>
				</div>

				<div className="w-full flex gap-5">
					<div
						onClick={() => {setView("login");}}
						className="border-2 border-darkblue-500 active:scale-x-105 duration-150
						text-darkblue-500 text-3xl w-1/3 h-12 rounded-lg grid place-items-center"
					>
						<IoMdArrowRoundBack />
					</div>

					<CustomButton
						type="submit"
						version="2"
						firstDisplayClassName="!bg-darkblue-500 active:scale-x-105 duration-150
						!text-white text-lg !w-full h-12 rounded-lg"
						secondDisplayClassName="!bg-orangelogo-500 !rounded-lg"
					>
						Send otp
					</CustomButton>
				</div>
			</form>

			<form
				className={`top-0  left-0 z-10 w-full 
				${showFirstForm && !showSecondForm ? "animate-appear_right_smooth" : "animate-disappear_left_smooth hidden"} text-black flex 
				flex-col gap-5 items-center w-full`}
				onSubmit={handleSubmitOtp}
			>
				<span className="mt-10 text-2xl font-semibold  text-center">
					Verify Otp
				</span>

				<div className="relative w-full">
					<CustomInputField
						placeholder={"OTP"}
						id={"otp"}
						key={"otp"}
						type={"text"}
						value={otp}
						setValue={(value: string) => setOtp(value)}
						version={"2"}
						inputClassName="!border-gray-500"
					/>
				</div>
				<CustomButton
					type="submit"
					version="2"
					firstDisplayClassName="!bg-darkblue-500 active:scale-x-105 duration-150
					!text-white text-lg !w-full h-12 rounded-lg"
					secondDisplayClassName="!bg-orangelogo-500 !rounded-lg"
				>
					Verify otp
				</CustomButton>
				<div className="mt-10 flex gap-1 items-center">
					{isCountDownStarted && <div className="font-extralight text-medium">{"Remaining time"} {secondsCountdown} {"seconds"}</div>}
					<button
						onClick={() => {
							handleResend();
						}}
						disabled={secondsCountdown > 0}
						className=" disabled:hidden active:scale-x-105 duration-150 font-extralight text-mediumunderline text-blue-400 ">
						{secondsCountdown > 0 ? "Sent" : "Resent"}
					</button>
				</div>
			</form>

			<form
				action=""
				method="POST"
				onSubmit={handleChangePass}
				className={` 
				gap-5  text-black  flex flex-col items-center 
				top-0  left-0 z-20 h-full w-full ${showSecondForm ? "animate-appear_right_smooth" : "hidden"} text-black flex flex-col items-center gap-5`}>
				<span className="mt-10 text-xl font-semibold  text-center">
					{"That's you"}
				</span>
				<div className="w-full relative flex flex-col gap-5">
					{resetPassFields.map(({ id, type, placeholder, version, isClearable, options, select_type, dropdownPosition }: ResetPassFields) => (
						<CustomInputField
							placeholder={placeholder}
							id={id}
							key={id}
							type={type}
							value={resetPass[id as keyof { pass: string; passCheck: string }]}
							setValue={(value: string | string[]) => setResetPass(prevData => ({ ...prevData, [id]: value }))}
							version={version}
							options={options}
							select_type={select_type}
							isClearable={isClearable}
							dropdownPosition={dropdownPosition}
							inputClassName="!border-gray-500"
						/>
					))}
				</div>
				<div className="flex gap-5 w-full">
					<div
						onClick={() => {
							setView("login");
						}}
						className="border-2 border-darkblue-500 active:scale-x-105 duration-150
						text-darkblue-500 text-3xl w-1/3 h-12 rounded-lg grid place-items-center"
					>
						<IoMdArrowRoundBack />
					</div>
					<CustomButton
						type="submit"
						version="2"
						firstDisplayClassName="!bg-darkblue-500 active:scale-x-105 duration-150
						!text-white text-lg !w-full h-12 rounded-lg"
						secondDisplayClassName="!bg-orangelogo-500 !rounded-lg"
					>
						Confirm
					</CustomButton>
				</div>
			</form>
		</div>
	);
}