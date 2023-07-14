import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

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

// ** @@ CREATE PRODUCT
export const createProduct = createAsyncThunk(
  "product/create-product",
  async (productData, thunkAPI: any) => {
    try {
      return await productService.createProduct(productData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ PUT PRODUCT
export const updateProduct = createAsyncThunk(
  "product/update-product",
  async (productData, thunkAPI: any) => {
    try {
      return await productService.updateProduct(productData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ GET PRODUCT
export const getProduct = createAsyncThunk(
  "product/get-product",
  async (id: string, thunkAPI: any) => {
    try {
      return await productService.getProduct(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ DELETE PRODUCT
export const deleteProduct = createAsyncThunk(
  "product/delete-product",
  async (id: string, thunkAPI: any) => {
    try {
      return await productService.deleteProduct(id);
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
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.createdProduct = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.updatedProduct = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.productTitle = action.payload.title;
        // @ts-ignore
        state.productDesc = action.payload.description;
        // @ts-ignore
        state.productPrice = action.payload.price;
        // @ts-ignore
        state.productBrand = action.payload.brand;
        // @ts-ignore
        state.productCategory = action.payload.category;
        // @ts-ignore
        state.productTags = action.payload.tags;
        // @ts-ignore
        state.productQuantity = action.payload.quantity;
        // @ts-ignore
        state.productColor = action.payload.color.color;
        // @ts-ignore
        state.productImages = action.payload.images;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.deletedProduct = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
