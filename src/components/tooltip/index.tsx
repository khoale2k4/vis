import { Tooltip } from "@chakra-ui/tooltip";

const TooltipHorizon = ({ className, children, content, placement }: TooltipProps) => {
    return (
        <Tooltip
            label={content}
            placement={placement}
            className={`w-max rounded-md py-1.5 px-3 text-sm shadow-xl shadow-shadow-500 dark:shadow-none w-50 ${className}`}
        >
            {children}
        </Tooltip>
    );
};

export default TooltipHorizon;