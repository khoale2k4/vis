'use client';

import { RootState } from "@/store";
import { FC, useEffect, useState } from "react";
import RenderCase from "@/components/render";
import LanguageSwitcherV1 from "./versions/v1";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { setLanguage } from "@/store/action/languageSlice";

const LANGUAGE_SWITCHER_VERSIONS: Record<LanguageVersion, FC<LanguageVersionProps>> = {
    '1': LanguageSwitcherV1,
};

const LanguageSwitcher = ({ version }: LanguageProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useDispatch();
    const [isClient, setIsClient] = useState<boolean>(false);
    const locale = useSelector((state: RootState) => state.language.locale);
    const VersionComponent = LANGUAGE_SWITCHER_VERSIONS[version ?? '1'] || null;

    const handleSwitchLanguage = (language: LocaleType) => {
        dispatch(setLanguage(language));
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const newPath = pathname.replace(/^\/.{2}/, '');
        router.push(`/${locale}${newPath}`);
    }, [locale, pathname, router]);

    return (
        <RenderCase renderIf={isClient && !!VersionComponent}>
            <VersionComponent handleSwitchLanguage={handleSwitchLanguage} />
        </RenderCase>
    );
};

export default LanguageSwitcher;