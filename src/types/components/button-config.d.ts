declare type ButtonVersion = '1';

declare type ButtonColors = "default" | "error" | "blue" | "success" | "yellow" | "orange" | "teal" | "lime" | "cyan" | "pink" | "purple" | "amber" | "indigo" | "gray" | "brand";

declare type ButtonProps = {
    version?: ButtonVersion;
    id?: string;
    color?: ButtonColors;
    className?: string;
    onClick?: (_e?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode | string;
};

declare type ButtonVersionProps = {
    id?: string;
    color?: ButtonColors;
    className?: string;
    onClick?: (_e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode | string;
};