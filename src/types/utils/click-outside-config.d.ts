declare type ClickOutsideAlerterProps = {
    ref: RefObject<HTMLElement>,
    setState?: React.Dispatch<React.SetStateAction<boolean>>,
    action?: () => void
};