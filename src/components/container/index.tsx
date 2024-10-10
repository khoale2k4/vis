const Container = ({ className, children }: ContainerProps) => {
    return (
        <div className={`!z-5 relative flex flex-col rounded-primary bg-lightContainer bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-darkContainer dark:text-white dark:shadow-none ${className}`}>
            {children}
        </div>
    );
};

export default Container;