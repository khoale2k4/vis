"use client";

import React from "react";
import Image from "next/image";
import { useScreenView } from "@/hooks/ScreenViewProvider";
import CustomButtonV1 from "@/components/button/versions/v1";

interface PricingCardProps {
    title: string;
    subtitle: string;
    price: string;
    period: string;
    features: string[];
    buttonText: string;
    buttonId?: string;
    buttonColor?: ButtonColors;
    active?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    subtitle,
    price,
    period,
    features,
    buttonText,
    buttonId,
    buttonColor,
    active = false,
}) => {
    const { isXL } = useScreenView();

    return (
        <div
            className={`relative w-[265px] h-[580px] rounded-2xl pt-8 px-6 pb-5 group
            ${active ? "bg-darkblue-500 shadow-xl shadow-blue-500/30 border-none scale-100"
                    : `bg-white border-1 border-gray-100/80 shadow-md 
                ${isXL ? "scale-80" : "hover:bg-darkblue-500 hover:shadow-blue-500/30 hover:shadow-xl"}`} 
            transition-all duration-700 ease-in-out`}
        >
            <Image
                src={"/pricing/layout_pricing.webp"}
                alt="layout"
                width={200}
                height={400}
                className="absolute pointer-events-none right-0"
            />
            <p className={`text-darkblue-500 font-bold text-xl ${active ? "text-white" : !isXL ? "group-hover:text-white" : ""}`}>{title}</p>
            <p className="text-neutral-80 font-thin text-md -mt-1">{subtitle}</p>
            <div className="flex flex-col py-10">
                <strong className="">
                    <p className={`text-darkblue-500 font-semibold text-[44px] ${active ? "text-white" : !isXL ? "group-hover:text-white" : ""}`}>
                        {price}
                    </p>
                </strong>
                <p className={`text-darkblue-500 font-normal text-md ${active ? "text-white" : !isXL ? "group-hover:text-white" : ""} -mt-2`}>{period}</p>
            </div>
            <CustomButtonV1 id={buttonId} color={buttonColor} className={`w-full h-11 ${!isXL ? "group-hover:bg-success-500" : ""} ${active ? "bg-success-500" : "bg-[#162B60]"} rounded-xl !shadow-none`}>
                {buttonText}
            </CustomButtonV1>
            <div className="pt-9">
                <ul>
                    {features.map((feature, index) => (
                        <li key={index} className="flex flex-row items-center pt-3 gap-2">
                            <Image src="/pricing/check-circle-1.webp" alt="check-icon" width={15} height={15} />
                            <p className={`text-darkblue-500 font-normal text-[15px] ${active ? "text-white" : !isXL ? "group-hover:text-white" : ""} w-full whitespace-nowrap`}>
                                {feature}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PricingCard;