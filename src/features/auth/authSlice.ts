import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService.ts";

export interface UserState {}

// Get user from LocalStorage
// @ts-ignore
const getUserFromLocalStorage = localStorage.getItem("user") || null;

// initial states
const initialState = {
  user: getUserFromLocalStorage,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ USER LOGIN
export const login = createAsyncThunk(
  "auth/login-admin",
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
