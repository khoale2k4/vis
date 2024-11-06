import Switch from "@/components/switch";

const ThemeSwitcherV1 = ({ checked, handleToggleTheme }: ThemeVersionProps) => {
    return (
        <Switch checked={checked} color="blue" onChange={handleToggleTheme} />
    );
};

export default ThemeSwitcherV1;