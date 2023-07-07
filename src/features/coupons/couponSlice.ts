import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import couponService from "./couponService.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

export interface CouponsState {}

// initial states
const initialState = {
  coupons: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ GET ALL COUPONS
export const getAllCoupons = createAsyncThunk(
  "coupon/get-coupons",
  async (thunkAPI: any) => {
    try {
      return await couponService.getAllCoupons();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ POST COUPON
export const createCoupon = createAsyncThunk(
  "coupon/create-coupon",
  async (couponData, thunkAPI: any) => {
    try {
      return await couponService.createCoupons(couponData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ PUT COUPON
export const updateCoupon = createAsyncThunk(
  "coupon/update-coupon",
  async (couponData, thunkAPI: any) => {
    try {
      return await couponService.updateCoupon(couponData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ GET COUPON
export const getCoupon = createAsyncThunk(
  "coupon/get-coupon",
  async (id: string, thunkAPI: any) => {
    try {
      return await couponService.getCoupon(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ DELETE COUPON
export const deleteCoupon = createAsyncThunk(
  "coupon/delete-coupon",
  async (id: string, thunkAPI: any) => {
    try {
      return await couponService.deleteCoupon(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCoupons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCoupons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.coupons = action.payload;
      })
      .addCase(getAllCoupons.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.coupons = action.payload;
      })
      .addCase(createCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.createdCoupon = action.payload;
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(updateCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.updatedCoupon = action.payload.name;
        // @ts-ignore
        state.updatedExpiry = action.payload.expiry;
        // @ts-ignore
        state.updatedDiscount = action.payload.discount;
      })
      .addCase(updateCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(getCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.couponName = action.payload.name;
        // @ts-ignore
        state.couponExpiry = action.payload.expiry;
        // @ts-ignore
        state.couponDiscount = action.payload.discount;
      })
      .addCase(getCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(deleteCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.deletedCoupon = action.payload;
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export const {} = couponSlice.actions;

export default couponSlice.reducer;
