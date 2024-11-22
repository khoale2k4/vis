"use client";

import CustomInputField from "@/components/input";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";

interface Props {
  setView: Dispatch<SetStateAction<"login" | "register" | "reset">>;
}

type RegisterFields = {
  placeholder: string;
  id: keyof createUserInfo;
  type: InputTypes;
  important?: boolean;
  version?: TextInputVersion | SelectInputVersion;
  select_type?: SelectInputType;
  options?: SelectInputOptionFormat[];
  isClearable?: boolean;
  state?: InputState;
  dropdownPosition?: DropdownPosition;
  onChange?: (_id: keyof createUserInfo, _value: string) => void;
};

export default function RegisterForm({ setView }: Props) {
  const registerFields: Array<RegisterFields> = [
    { id: "fullName", type: "text", placeholder: "Fullname", important: true, version: "2" },
    { id: "address", type: "text", placeholder: "Address", important: true, version: "2" },
    { id: "email", type: "email", placeholder: "Email", important: true, version: "2" },
    { id: "phone", type: "text", placeholder: "Phone No.", important: true, version: "2" },
    { id: "password", type: "password", placeholder: "Password", important: true, version: "2" },
  ];

  const [RegisterInfo, setRegisterInfo] = useState<createUserInfo>({
    fullName: "",
    address: "",
    email: "",
    password: "",
    phone: "",
  });

  const updateValue = (id: keyof createUserInfo, value: string | string[]) => {
    setRegisterInfo((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const handleApi = async () => {
      const response = await fetch("/api/authentication/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: RegisterInfo.fullName,
          address: RegisterInfo.address,
          email: RegisterInfo.email,
          password: RegisterInfo.password,
          phone: RegisterInfo.phone,
        }),
      });
      const jsonData = await response.json();
      return jsonData;
    };

    toast.promise(handleApi(), {
      loading: "Loading",
      success: (res) => {
        if (res.success) {
			return res.message;
		}
        throw new Error(res.message);
      },
      error: (err) => err.message,
    });
  };

  return (
    <form
      className="h-fit animate-appear_right_smooth w-full rounded-xl shadow-xl text-black bg-white flex flex-col items-center p-20 py-24"
      method="POST"
      onSubmit={handleRegister}
    >
      <h1 className="flex flex-col text-5xl font-bold">Sign up</h1>
      <div className="mt-10 flex flex-col gap-5 w-full">
        {registerFields.map(
          ({ id, type, placeholder, version, isClearable, options, select_type, dropdownPosition }: RegisterFields) => (
            <CustomInputField
              placeholder={placeholder}
              id={id}
              key={id}
              type={type}
              value={RegisterInfo[id]}
              setValue={(value: string | string[]) => updateValue(id, value)}
              version={version}
              options={options}
              select_type={select_type}
              isClearable={isClearable}
              dropdownPosition={dropdownPosition}
              inputClassName="!border-gray-500"
            />
          )
        )}
      </div>
      <div className="mt-5 w-full gap-5 relative grid grid-cols-1">
        <button className="bg-darkblue-500 active:scale-x-105 duration-150 text-white text-lg w-full h-12 rounded-lg">
          Register
        </button>
        <span className="text-center w-full font-extralight text-medium place-items-end">
          {"Already have account? "}
          <span onClick={() => setView("login")} className="underline cursor-pointer text-darkblue-400">
            {"Login now"}
          </span>
        </span>
      </div>
    </form>
  );
}