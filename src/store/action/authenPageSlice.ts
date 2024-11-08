import { createSlice } from '@reduxjs/toolkit';

const initialState: LoginPageState = {
    show: 'login', // Trạng thái ban đầu là "login"
  };
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setShowLogin: (state: LoginPageState) => {
      state.show = 'login';
    },
    setShowRegister: (state: LoginPageState) => {
      state.show = 'register';
    },
    setShowReset: (state: LoginPageState) => {
      state.show = 'reset';
    },
  },
});

// Xuất các action để thay đổi trạng thái 'show'
export const { setShowLogin, setShowRegister, setShowReset } = loginSlice.actions;

// Xuất reducer của slice để tích hợp vào store
export default loginSlice.reducer;