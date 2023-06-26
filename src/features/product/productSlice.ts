import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService.ts";

export interface ProductsState {}

// initial states
const initialState = {
  products: [],
  createdProduct: "",
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

// **// ** @@ POST PRODUCT
export const createProducts = createAsyncThunk(
  "product/create-products",
  async (productData, thunkAPI: any) => {
    try {
      return await productService.createProducts(productData);
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
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.products = action.payload;
      })
      .addCase(createProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdProduct = action.payload;
      })
      .addCase(createProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
