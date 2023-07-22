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

// ** @@ GET USER ORDERS
export const getUserOrders = createAsyncThunk(
  "order/user-orders",
  async (id: any, thunkAPI: any) => {
    try {
      return await orderService.getOrderByUser(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ GET USER ORDERS
export const getMonthlyOrdersData = createAsyncThunk(
  "order/monthly-orders",
  async (thunkAPI: any) => {
    try {
      return await orderService.getMonthlyOrders();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ GET YEARLY STATS
export const getYearlyStatsData = createAsyncThunk(
  "order/yearly-stats",
  async (thunkAPI: any) => {
    try {
      return await orderService.getYearlyStats();
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
      })
      .addCase(getUserOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.userOrders = action.payload;
      })
      .addCase(getUserOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(getMonthlyOrdersData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMonthlyOrdersData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.monthlyOrders = action.payload;
      })
      .addCase(getMonthlyOrdersData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(getYearlyStatsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getYearlyStatsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.yearlyStats = action.payload;
      })
      .addCase(getYearlyStatsData.rejected, (state, action) => {
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
