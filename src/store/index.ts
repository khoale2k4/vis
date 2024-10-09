import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './action/languageSlice';
import notificationsReducer from './action/notificationsSlice';

export const store = configureStore({
    reducer: {
        language: languageReducer,
        notifications: notificationsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;