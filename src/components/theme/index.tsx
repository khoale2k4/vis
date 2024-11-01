"use client";

import RenderCase from "../render";
import { FC, useEffect } from "react";
import ThemeSwitcherV1 from "./versions/v1";
import { useDispatch, useSelector } from "react-redux";
import { loadThemeFromStorage, setDarkTheme, setLightTheme } from "@/store/action/themeSlice";

const THEME_SWITCHER_VERSIONS: Record<ThemeVersion, FC<ThemeVersionProps>> = {
    '1': ThemeSwitcherV1,
};

const ThemeSwitcher = ({ version }: ThemeProps) => {
    const dispatch = useDispatch();
    const theme = useSelector((state: { theme: ThemeState }) => state.theme.theme);
    const VersionComponent = THEME_SWITCHER_VERSIONS[version ?? '1'] || null;

    const handleToggleTheme = () => {
        const isDark = theme === 'dark';
        dispatch(isDark ? setLightTheme() : setDarkTheme());
    };

    useEffect(() => {
        dispatch(loadThemeFromStorage());
    }, [dispatch]);

    return (
        <RenderCase renderIf={!!VersionComponent} suspense={true}>
            <VersionComponent checked={theme === 'dark'} handleToggleTheme={handleToggleTheme} />
        </RenderCase>
    );
};

export default ThemeSwitcher;