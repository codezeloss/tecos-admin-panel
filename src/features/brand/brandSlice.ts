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

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.brands = action.payload;
    });
    builder.addCase(getBrands.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      // @ts-ignore
      state.brands = action.payload;
    });
  },
});

export const {} = brandSlice.actions;

export default brandSlice.reducer;
