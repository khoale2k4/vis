import Progress from '@/components/progress';

const NotificationContent = ({ message, progressWidth }: NotificationContentProps) => {
    return (
        <div>
            <p className="text-sm text-gray-800 py-4 dark:text-white">{message}</p>
            <Progress value={progressWidth} height='h-1' className='absolute bottom-0 right-0' bgColor='bg-none' />
        </div>
    );
};

export default NotificationContent;