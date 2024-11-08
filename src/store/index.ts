import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './action/languageSlice';
import themeReducer from './action/themeSlice';
import loginReducer from './action/authenPageSlice';
export const store = configureStore({
    reducer: {
        language: languageReducer,
        theme: themeReducer,
        login: loginReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;