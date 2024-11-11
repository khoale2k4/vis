import React from "react";
import PricingCard from "./componets/PricingCard";

export default function PricingContent() {
    return (
        <div className="flex flex-col items-center h-[1000px] md:flex-col">
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-4xl text-darkblue-500 md:text-5xl lg:text-6xl 2xl:text-7xl">The Price</h2>
                <p className="font-normal text-2xl text-darkblue-500">Is no more of a problem</p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-5 pt-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                <PricingCard
                    title="Migrations"
                    subtitle="Starting at"
                    price="$1,950"
                    period="Annual Subscription"
                    features={[
                        "Data Migration",
                        "Simple Tax Preparation",
                        "Fund Administration",
                        "Fund Manager",
                        "Fund Manager",
                        "Investor Records",
                    ]}
                    buttonText="Get Price Estimate"
                    buttonId="button1"
                    buttonColor="brand"
                />
                <PricingCard
                    title="SPVS"
                    subtitle="Starting at"
                    price="$9,950"
                    period="Setup Cost"
                    features={[
                        "Series of Entity Included",
                        "Bank Account",
                        "Investor Onboarding",
                        "Fund Manager",
                        "Regulatory Filings",
                        "Simple Tax Preparation",
                    ]}
                    buttonText="Get Price Estimate"
                    buttonId="button1"
                    buttonColor="brand"
                />
                <PricingCard
                    title="Funds"
                    subtitle="Starting at"
                    price="$19,500"
                    period="Annual Subscription"
                    features={[
                        "30 Investments Included",
                        "18 Month Raising Period",
                        "36 Month Investing Period",
                        "Annual Financial Statements",
                        "Multiple Closes Supported",
                    ]}
                    buttonText="Get Price Estimate"
                    buttonId="button1"
                    buttonColor="brand"
                />
                <PricingCard
                    title="Custom Funds"
                    subtitle="Starting at"
                    price="$49,500"
                    period="Annual Subscription"
                    features={[
                        "Custom Investments",
                        "Custom Raising Period",
                        "Custom Investment Period",
                        "Custom Financial Statements",
                        "Custom Financial Statements",
                        "Custom Classes",
                    ]}
                    buttonText="Get Price Estimate"
                    buttonId="button1"
                    buttonColor="brand"
                />
            </div>
        </div>
    );
}