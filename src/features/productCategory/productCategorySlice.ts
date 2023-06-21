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

export const productCategorySlice = createSlice({
  name: "productCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.productCategories = action.payload;
    });
    builder.addCase(getProductCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      // @ts-ignore
      state.productCategories = action.payload;
    });
  },
});

export const {} = productCategorySlice.actions;

export default productCategorySlice.reducer;
