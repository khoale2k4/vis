'use client';

import { MdClose } from "react-icons/md";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import RenderCase from "@/components/render";
import Dropdown from '@/components/dropdown';
import { formatDate } from "@/utils/formatDate";
import { parseDate } from "@internationalized/date";
import { Calendar, DateValue } from "@nextui-org/react";
import { FiCalendar, FiEye, FiEyeOff } from "react-icons/fi";

const TextInputV1 = ({
    value, setValue, state, placeholder, isClearable = false, id, className, type, disabled = false,
}: TextInputProps) => {
    const [isClient, setIsClient] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showCalendar, setShowCalendar] = useState<boolean>(false);
    const InputFieldMessage = useTranslations('InputField');

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

    const triggerButton = () => {
        return (
            <>
                <RenderCase renderIf={type !== 'text-area'}>
                    <input
                        value={type === "date" ? value.split('/').reverse().join('-') : value}
                        onChange={(e) => { setValue(e.target.value); }}
                        onBlur={(e) => { if (type === "date") { setValue(e.target.value); }; }}
                        disabled={disabled}
                        type={type === "password" && showPassword ? "text" : type}
                        id={id}
                        placeholder={type === "date" ? "" : (placeholder || InputFieldMessage('DefaultTextPlaceHolder'))}
                        className={`p-2 px-3 text-left border rounded-md w-full dark:bg-darkContainerPrimary
                        focus:outline-none flex justify-between place-items-center hide-calendar-icon
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

                <RenderCase renderIf={type === 'text-area'}>
                    <textarea
                        value={value}
                        onChange={(e) => { setValue(e.target.value); }}
                        onBlur={(e) => { if (type === "date") { setValue(e.target.value); }; }}
                        disabled={disabled}
                        id={id}
                        placeholder={type === "date" ? "" : (placeholder || InputFieldMessage('DefaultTextPlaceHolder'))}
                        className={`p-2 px-3 min-h-12 text-left border rounded-md w-full dark:bg-darkContainerPrimary
                        focus:outline-none flex justify-between place-items-center hide-calendar-icon
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

                <RenderCase renderIf={isClearable && value && isClient && type !== 'date' && type !== 'password' && type !== 'text-area'}>
                    <button
                        type="button"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={(e) => {
                            e.stopPropagation();
                            setValue('');
                        }}
                    >
                        <MdClose />
                    </button>
                </RenderCase>

                <RenderCase renderIf={type === "password"}>
                    <button
                        onClick={togglePasswordVisibility}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none text-gray-500"
                    >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                </RenderCase>

                <RenderCase renderIf={type === "date"}>
                    <FiCalendar
                        className="absolute top-1/2 right-2.5 transform -translate-y-1/2 focus:outline-none text-black dark:text-white"
                    />
                </RenderCase>
            </>
        );
    };

    useEffect(() => {
        setIsClient(true);
    }, [type]);

    return (
        <div className={`relative ${className}`}>
            <Dropdown
                disabled={disabled || type !== "date"}
                openWrapper={showCalendar}
                setOpenWrapper={setShowCalendar}
                button={triggerButton()}
                max_width={true}
                className="top-12 w-full"
            >
                <RenderCase renderIf={type === "date"}>
                    <Calendar
                        showMonthAndYearPickers
                        onChange={handleDateChange}
                        value={value && type === "date" ? parseDate(value.split('/').reverse().join('-')) : null}
                        classNames={{
                            base: "w-full justify-center flex bg-white dark:bg-darkContainerPrimary border dark:border-white/10 !rounded-md shadow-none no-scrollbar relative",
                            content: "w-full absolute",
                            header: "bg-white dark:bg-darkContainerPrimary",
                        }}
                    />
                </RenderCase>
            </Dropdown>
        </div>
    );
};

export default TextInputV1;