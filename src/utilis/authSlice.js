import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("foodaddaUser"));
const authSlice = createSlice({
  name: "auth",

  initialState: {
    isLoggedIn: !!savedUser,
    user: savedUser,
  },

  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;

      localStorage.setItem("foodaddaUser", JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;

      localStorage.removeItem("foodaddaUser");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
