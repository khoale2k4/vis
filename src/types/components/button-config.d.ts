declare type ButtonVersion = '1'|'2';

declare type ButtonColors = "default" | "error" | "blue" | "success" | "yellow" | "orange" | "teal" | "lime" | "cyan" | "pink" | "purple" | "amber" | "indigo" | "gray" | "brand";

declare type ButtonProps = {
    firstDisplayClassName?: string;
    secondDisplayClassName?: string;
    type?: "submit"| "reset";
    version?: ButtonVersion;
    id?: string;
    color?: ButtonColors;
    className?: string;
    onClick?: (_e?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode | string;
};

declare type ButtonVersionProps = {
    type?: "submit"| "reset";
    id?: string;
    color?: ButtonColors;
    firstDisplayClassName?: string;
    secondDisplayClassName?: string;
    className?: string;
    onClick?: (_e?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode | string;
};