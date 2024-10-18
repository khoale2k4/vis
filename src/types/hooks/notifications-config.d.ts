declare type NotificationsAction =
    | { type: 'ADD_NOTIFICATION'; payload: Omit<NotificationUtility, 'id'> }
    | { type: 'REMOVE_NOTIFICATION'; payload: string };

declare type NotificationUtility = {
    id: string;
    title?: string;
    message: string;
    type: NotificationTypes;
    onClick?: () => void;
};

declare type NotificationsState = {
    notifications: NotificationUtility[];
};

declare type NotificationTypes = 'default' | 'error' | 'success';