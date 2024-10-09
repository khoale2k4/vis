import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotificationsState {
    notifications: NotificationUtility[];
}

const initialState: NotificationsState = {
    notifications: [],
};

const generateNotificationId = (): string => {
    return new Date().getTime().toString();
};

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<Omit<NotificationUtility, 'id'>>) => {
            const newNotification: NotificationUtility = {
                ...action.payload,
                id: generateNotificationId(),
            };
            state.notifications.push(newNotification);
        },

        removeNotification: (state, action: PayloadAction<string>) => {
            state.notifications = state.notifications.filter(
                (notification) => notification.id !== action.payload
            );
        },
    },
});

export const { addNotification, removeNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
