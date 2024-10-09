import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
    locale: 'en' | 'vi';
}

const getInitialLocale = (): 'en' | 'vi' => {
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    if (path.startsWith('/en')) return 'en';
    if (path.startsWith('/vi')) return 'vi';
};

const initialState: LanguageState = {
    locale: getInitialLocale(),
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguageVi: (state) => {
            state.locale = 'vi';
            localStorage?.setItem('locale', 'vi');
        },
        setLanguageEn: (state) => {
            state.locale = 'en';
            localStorage?.setItem('locale', 'en');
        },
        // Optional: still keep the generic setLanguage for flexibility
        // setLanguage: (state, action: PayloadAction<string>) => {
        //     state.locale = action.payload;
        //     localStorage.setItem('locale', action.payload);
        // },
    },
});

export const { setLanguageVi, setLanguageEn } = languageSlice.actions;
export default languageSlice.reducer;
