import { createSlice } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: null,
    refreshToken: null,
    username: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { access_token, refresh_token, username } = action.payload;
      state.accessToken = access_token;
      state.refreshToken = refresh_token;
      state.username = username;

      // Save tokens in SecureStore
      SecureStore.setItemAsync("access_token", access_token);
      SecureStore.setItemAsync("refresh_token", refresh_token);
    },
    clearUser: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.username = null;

      // Remove tokens from SecureStore
      SecureStore.deleteItemAsync("access_token");
      SecureStore.deleteItemAsync("refresh_token");
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
