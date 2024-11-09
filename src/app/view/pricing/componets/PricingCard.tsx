import React from "react";
import CustomButtonV1 from "@/components/button/versions/v1";
import Image from 'next/image';

interface PricingCardProps {
    title: string;
    subtitle: string;
    price: string;
    period: string;
    features: string[];
    buttonText: string;
    buttonId?: string;
    buttonColor?:
        | "brand"
        | "default"
        | "error"
        | "blue"
        | "success"
        | "yellow"
        | "orange"
        | "teal"
        | "lime"
        | "cyan"
        | "pink"
        | "purple"
        | "amber"
        | "indigo"
        | "gray";
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
}) => {
    return (
        <div>
            <div className="border-solid border-1 w-[314px] h-[600px] rounded-2xl pt-5 pl-10 pb-5 group hover:bg-darkblue-500 hover:border-none hover-transition-background duration-300 hover:shadow-xl hover:shadow-blue-500/30">
                <p className="text-darkblue-500 font-bold text-2xl group-hover:text-white">{title}</p>
                <p className="text-neutral-80 font-thin text-base">{subtitle}</p>
                <strong className="">
                    <p className="text-darkblue-500 font-semibold text-[45px] pt-4 group-hover:text-white after:content-['/year'] after:font-thin after:text-base after:pl-1">{price}</p>
                </strong>
                <p className="text-darkblue-500 font-normal text-[17px] pt-0 pb-9 group-hover:text-white">{period}</p>
                <CustomButtonV1 id={buttonId} color={buttonColor} className="w-[82%] bg-[#162B60] group-hover:bg-success-500">
                    {buttonText}
                </CustomButtonV1>
                <div className="pt-9">
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index} className="flex flex-row items-center pt-3">
                                <Image src="/check-circle-1.webp" alt="check-icon" width={22} height={22}/>
                                <p className="text-darkblue-500 font-normal text-[18px] pl-2 group-hover:text-white">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default PricingCard;