'use client';

import { useDispatch } from "react-redux";
import { store } from "@/store";
import { setLanguageVi, setLanguageEn } from "@/store/action/languageSlice";

const LanguageSwitcherV1 = () => {
    const dispatch = useDispatch();
    const locale = store.getState().language.locale;

    const handleToggle = () => {
        const newLocale = locale === "vi" ? "en" : "vi";
        dispatch(newLocale === "vi" ? setLanguageVi() : setLanguageEn());
    };

    return (
        <button onClick={handleToggle} className="flex justify-center place-items-center w-full h-full">
            {locale}
        </button>
    );
};

export default LanguageSwitcherV1;
