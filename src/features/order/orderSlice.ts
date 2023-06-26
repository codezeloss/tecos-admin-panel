import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "./orderService.ts";

export interface OrderState {}

// initial states
const initialState = {
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ GET ALL ORDERS
export const getOrders = createAsyncThunk(
  "order/orders",
  async (thunkAPI: any) => {
    try {
      return await orderService.getOrders();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.orders = action.payload;
        state.message = "success";
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      });
  },
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;