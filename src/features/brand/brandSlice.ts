import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import brandService from "./brandService.ts";

export interface BrandsState {}

// initial states
const initialState = {
  brands: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ GET ALL BRANDS
export const getBrands = createAsyncThunk(
  "brand/get-brands",
  async (thunkAPI: any) => {
    try {
      return await brandService.getBrands();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

// ** @@ POST BRAND
export const createBrand = createAsyncThunk(
  "brand/create-brand",
  async (brandData, thunkAPI: any) => {
    try {
      return await brandService.createBrand(brandData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.brands = action.payload;
      })
      .addCase(createBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.createdBrand = action.payload;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      });
  },
});

export const {} = brandSlice.actions;

export default brandSlice.reducer;
