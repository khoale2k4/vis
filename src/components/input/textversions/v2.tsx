"use client";

import { MdClose } from "react-icons/md";
import { useTranslations } from "next-intl";
import RenderCase from "@/components/render";
import Dropdown from '@/components/dropdown';
import { formatDate } from "@/utils/formatDate";
import { parseDate } from "@internationalized/date";
import { Calendar, DateValue } from "@nextui-org/react";
import { ChangeEvent, useEffect, useState } from "react";
import { FiCalendar, FiEye, FiEyeOff } from "react-icons/fi";

const TextInputV2 = ({
    value, setValue, state, placeholder, isClearable = false, id, className, inputClassName, type, disabled = false,
}: TextInputProps) => {
    const InputFieldMessage = useTranslations('InputField');
    const [isClient, setIsClient] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showCalendar, setShowCalendar] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleDateChange = async (date: DateValue) => {
        if (date) {
            const jsDate = new Date(date.year, date.month - 1, date.day);
            const formattedDate = formatDate({ date: jsDate });
            setValue(formattedDate);
            setShowCalendar(false);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string, setValue: (_value: string) => void, blur?: boolean) => {
        const inputValue = e.target.value;
        if (type === "date" && inputValue.split('-')[0]?.length > 4) {
            const parts = inputValue.split('-');
            parts[0] = parts[0].substring(0, 4);
            setValue(parts.reverse().join('/'));
        } else if (!blur) {
            setValue(inputValue);
        }
    };

    const validateDate = () => {
        if (value === '') { return; };
        try {
            const parsedDate = parseDate(value.split('/').reverse().join('-'));
            if (!parsedDate) {
                throw new Error('Invalid date format');
            }
        } catch {
            throw new Error(`Invalid date format: ${value} \nThe initial date value must either be an empty string or follow the format 'dd/mm/yyyy' (replace d, m, and y with numbers).`);
        };
    };

    if (type === 'date') {
        validateDate();
    };

    const triggerButton = () => {
        return (
            <>
                <RenderCase renderIf={type !== 'text-area'}>
                    <div className="relative w-full">
                        <input
                            id={(placeholder || InputFieldMessage('DefaultTextPlaceHolder'))}
                            name={(placeholder || InputFieldMessage('DefaultTextPlaceHolder'))}
                            type={type === "password" && showPassword ? "text" : type}
                            className={`px-5 peer h-12 w-full rounded-lg border-1 bg-transparent 
                            border-black text-black placeholder-transparent focus:outline-none 
                            focus:border-sky-700
                            ${inputClassName}
                            ${disabled
                                ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                                : state === "error"
                                    ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                                    : state === "success"
                                        ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                                        : "dark:border-none"
                            }`}
                            placeholder=""
                            value={type === "date" ? value.split('/').reverse().join('-') : value}
                            onChange={(e) => handleInputChange(e, type, setValue)}
                            required
                        />
                        <label
                            htmlFor={(placeholder || InputFieldMessage('DefaultTextPlaceHolder'))}
                            className="absolute rounded-full px-2 tracking-wide left-2 -top-2.5 text-black text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 bg-white peer-focus:text-black peer-focus:text-sm">
                                {type === "date" ? "" : (placeholder || InputFieldMessage('DefaultTextPlaceHolder'))}
                        </label>
                    </div>
                </RenderCase>

                <RenderCase renderIf={type === 'text-area'}>
                    <textarea
                        id={id}
                        rows={6}
                        value={value}
                        disabled={disabled}
                        onChange={(e) => { setValue(e.target.value); }}
                        placeholder={type === "date" ? "" : (placeholder || InputFieldMessage('DefaultTextPlaceHolder'))}
                        className={`p-2 px-3 min-h-12 text-left border rounded-md w-full dark:bg-darkContainerPrimary
                        focus:outline-none flex justify-between place-items-center hide-calendar-icon
                        ${inputClassName}
                        ${disabled
                                ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
                                : state === "error"
                                    ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
                                    : state === "success"
                                        ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
                                        : "dark:border-none"
                            } `}
                    />
                </RenderCase>

                <RenderCase renderIf={type === "password"}>
                    <div
                        onClick={togglePasswordVisibility}
                        className="absolute top-1/2 right-2.5 transform -translate-y-1/2 focus:outline-none"
                    >
                        <RenderCase renderIf={showPassword}>
                            <FiEyeOff />
                        </RenderCase>

                        <RenderCase renderIf={!showPassword}>
                            <FiEye />
                        </RenderCase>
                    </div>
                </RenderCase>

                <RenderCase renderIf={isClearable && !!value && isClient && type !== 'date' && type !== 'password' && type !== 'text-area'}>
                    <button
                        type="button"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        onClick={(e) => { e.stopPropagation(); setValue(''); }}
                    >
                        <MdClose />
                    </button>
                </RenderCase>

                <RenderCase renderIf={type === "date"}>
                    <FiCalendar className="absolute top-1/2 right-2.5 transform -translate-y-1/2 focus:outline-none text-black dark:text-white" />
                </RenderCase>
            </>
        );
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className={`relative ${className}`}>
            <RenderCase renderIf={type !== "date"}>
                {triggerButton()}
            </RenderCase>

            <RenderCase renderIf={type === "date"}>
                <Dropdown
                    maxWidth={true}
                    button={triggerButton()}
                    className="top-12 w-full"
                    openWrapper={showCalendar}
                    setOpenWrapper={setShowCalendar}
                    disabled={disabled || type !== "date"}
                >
                    <RenderCase renderIf={type === "date"}>
                        <Calendar
                            showMonthAndYearPickers
                            onChange={handleDateChange}
                            value={value && type === "date" ? parseDate(value.split('/').reverse().join('-')) : null}
                            defaultValue={value && type === "date" ? parseDate(value.split('/').reverse().join('-')) : null}
                            classNames={{
                                content: "w-full absolute",
                                header: "bg-white dark:bg-darkContainerPrimary",
                                base: "w-full justify-center flex bg-white dark:bg-darkContainerPrimary border dark:border-white/10 !rounded-md shadow-none no-scrollbar relative",
                            }}
                        />
                    </RenderCase>
                </Dropdown>
            </RenderCase>
        </div>
    );
};

export default TextInputV2;