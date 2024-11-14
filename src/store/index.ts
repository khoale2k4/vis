import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './action/languageSlice';
import themeReducer from './action/themeSlice';
export const store = configureStore({
    reducer: {
        language: languageReducer,
        theme: themeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;