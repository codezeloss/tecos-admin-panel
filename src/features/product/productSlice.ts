import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService.ts";

export interface ProductsState {}

// initial states
const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ GET ALL PRODUCTS
export const getProducts = createAsyncThunk(
  "product/get-products",
  async (thunkAPI: any) => {
    try {
      return await productService.getProducts();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      // @ts-ignore
      state.products = action.payload;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
