declare type SubmitNotificationAction =
    | { type: 'ADD_NOTIFICATION'; payload: SubmitNotificationUtility }
    | { type: 'REMOVE_NOTIFICATION' };

declare type SubmitNotificationUtility = {
    title?: string;
    message?: string;
    children?: React.ReactNode;
    submitClick?: () => void;
};

declare type SubmitNotificationState = {
    submitNotification: SubmitNotificationUtility;
    openNotification: boolean;
};