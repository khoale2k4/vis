
const CustomButtonV2 = ({ id, className, color, onClick, children, firstDisplayClassName, secondDisplayClassName, type }: ButtonVersionProps) => {
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            className={`
                group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-50
                ${color === "error" ? "bg-red-500 dark:bg-red-600"
                    : color === "blue" ? "bg-blue-500 dark:bg-blue-600"
                        : color === "success" ? "bg-green-500 dark:bg-green-600"
                            : color === "yellow" ? "bg-yellow-500 dark:bg-yellow-600"
                                : color === "orange" ? "bg-orange-500 dark:bg-orange-600"
                                    : color === "teal" ? "bg-teal-500 dark:bg-teal-600"
                                        : color === "lime" ? "bg-lime-500 dark:bg-lime-600"
                                            : color === "cyan" ? "bg-cyan-500 dark:bg-cyan-600"
                                                : color === "pink" ? "bg-pink-500 dark:bg-pink-600"
                                                    : color === "purple" ? "bg-purple-500 dark:bg-purple-600"
                                                        : color === "amber" ? "bg-amber-500 dark:bg-amber-600"
                                                            : color === "indigo" ? "bg-indigo-500 dark:bg-indigo-600"
                                                                : color === "gray" ? "bg-gray-500 dark:bg-gray-600"
                                                                    : color === "brand" ? "bg-brand-500 dark:bg-brand-600"
                                                                        : "bg-utilsPrimary dark:bg-utilsPrimaryDark"
                } ${firstDisplayClassName} ${className}`}
        >
            <span
                className={`absolute h-0 w-0 rounded-full bg-blue-500 
                ${secondDisplayClassName} transition-all duration-250 ease-out
                group-hover:h-56 group-hover:w-full`}
            />
            <span className="relative">{children}</span>
        </button>

    );
};

export default CustomButtonV2;