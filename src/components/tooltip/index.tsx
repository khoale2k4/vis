import { Tooltip } from "@chakra-ui/tooltip";

const TooltipHorizon = ({ className, children, content, placement }: TooltipProps) => {
    return (
        <Tooltip
            label={content}
            placement={placement}
            className={`absolute w-max text-sm dark:shadow-none w-50 ${className}`}
        >
            {children}
        </Tooltip>
    );
};

export default TooltipHorizon;