import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  saveToSecureStore,
  getFromSecureStore,
  deleteFromSecureStore,
} from "./secureStorage";

// Thunks for handling async actions
export const loadUserFromSecureStore = createAsyncThunk(
  "user/loadUser",
  async () => {
    const user = await getFromSecureStore("user");
    return user ? JSON.parse(user) : null;
  }
);

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  await deleteFromSecureStore("user");
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      saveToSecureStore("user", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserFromSecureStore.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUserFromSecureStore.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loadUserFromSecureStore.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load user from SecureStore";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
