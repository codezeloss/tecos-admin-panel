import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productCategoryService from "./productCategoryService.ts";

export interface productCategoriesState {}

// initial states
const initialState = {
  productCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ GET ALL PRODUCT CATEGORIES
export const getProductCategories = createAsyncThunk(
  "productCategory/get-productCategories",
  async (thunkAPI: any) => {
    try {
      return await productCategoryService.getProductCategories();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

// ** @@ POST PRODUCT CATEGORY
export const createProductCategory = createAsyncThunk(
  "product/create-product-category",
  async (productCategoryData, thunkAPI: any) => {
    try {
      return await productCategoryService.createProductCategory(
        productCategoryData
      );
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const productCategorySlice = createSlice({
  name: "productCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.productCategories = action.payload;
      })
      .addCase(getProductCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.productCategories = action.payload;
      })
      .addCase(createProductCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.createdProductCategory = action.payload;
      })
      .addCase(createProductCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      });
  },
});

export const {} = productCategorySlice.actions;

export default productCategorySlice.reducer;
