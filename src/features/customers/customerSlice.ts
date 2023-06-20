import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerService from "./customerService.ts";

export interface CustomersState {}

// initial states
const initialState = {
  customers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ GET ALL USERS
export const getUsers = createAsyncThunk(
  "customer/get-customers",
  async (thunkAPI: any) => {
    try {
      return await customerService.getUsers();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.customers = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      // @ts-ignore
      state.customers = action.payload;
    });
  },
});

export const {} = customerSlice.actions;

export default customerSlice.reducer;
