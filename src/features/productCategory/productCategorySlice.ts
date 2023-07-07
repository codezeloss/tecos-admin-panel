import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productCategoryService from "./productCategoryService.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

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

// ** @@ PUT PRODUCT CATEGORY
export const updateProductCategory = createAsyncThunk(
  "productCategory/update-productCategory",
  async (productCategoryData, thunkAPI: any) => {
    try {
      return await productCategoryService.updateProductCategory(
        productCategoryData
      );
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

// ** @@ GET PRODUCT CATEGORY
export const getProductCategory = createAsyncThunk(
  "productCategory/get-productCategory",
  async (id: string, thunkAPI: any) => {
    try {
      return await productCategoryService.getProductCategory(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **
//
// ** @@ DELETE PRODUCT CATEGORY
export const deleteProductCategory = createAsyncThunk(
  "productCategory/delete-productCategory",
  async (id: string, thunkAPI: any) => {
    try {
      return await productCategoryService.deleteProductCategory(id);
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
      })
      .addCase(updateProductCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.updatedProductCategory = action.payload;
      })
      .addCase(updateProductCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(getProductCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.categoryName = action.payload.title;
      })
      .addCase(getProductCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(deleteProductCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.deletedProductCategory = action.payload;
      })
      .addCase(deleteProductCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export const {} = productCategorySlice.actions;

export default productCategorySlice.reducer;
