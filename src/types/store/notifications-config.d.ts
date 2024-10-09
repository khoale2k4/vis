declare type NotificationUtility = {
    id: string;
    title?: string;
    message: string;
    type: NotificationTypes
}

declare type NotificationTypes = 'default' | 'error' | 'success'