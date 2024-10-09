'use client';

import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import RenderCase from "@/components/render";
import LanguageSwitcherV1 from "../../views/components/language/v1";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isClient, setIsClient] = useState(false)
    const locale = useSelector((state: RootState) => state.language.locale);

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        const newPath = pathname.replace(/^\/.{2}/, '');
        router.push(`/${locale}${newPath}`);
    }, [locale]);

    return (
        <div className="w-full h-full">
            <RenderCase renderIf={isClient} suspense={true}>
                <LanguageSwitcherV1 />
            </RenderCase>
        </div>
    );
};

export default LanguageSwitcher;
