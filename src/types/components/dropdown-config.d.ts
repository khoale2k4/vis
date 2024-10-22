declare type DropdownProps = {
    max_width?: boolean;
    position?: string;
    className?: string;
    animation?: string;
    button?: React.ReactNode;
    children?: React.ReactNode;
    openWrapper?: boolean;
    disabled?: boolean;
    setOpenWrapper?: React.Dispatch<React.SetStateAction<boolean>>;
};