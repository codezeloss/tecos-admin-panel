import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productColorService from "./productColorService.ts";

export interface productColorsState {}

// initial states
const initialState = {
  productColors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ GET ALL PRODUCT COLORS
export const getProductColors = createAsyncThunk(
  "productColor/get-productColors",
  async (thunkAPI: any) => {
    try {
      return await productColorService.getProductColors();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const productColorSlice = createSlice({
  name: "productColor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductColors.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductColors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.productColors = action.payload;
    });
    builder.addCase(getProductColors.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      // @ts-ignore
      state.productColors = action.payload;
    });
  },
});

export const {} = productColorSlice.actions;

export default productColorSlice.reducer;
