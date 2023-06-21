import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogCategoryService from "./blogCategoryService.ts";

export interface blogCategoriesState {}

// initial states
const initialState = {
  blogCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ GET ALL PRODUCT CATEGORIES
export const getBlogCategories = createAsyncThunk(
  "blogCategory/get-blogCategories",
  async (thunkAPI: any) => {
    try {
      return await blogCategoryService.getBlogCategories();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const blogCategorySlice = createSlice({
  name: "blogCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBlogCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.blogCategories = action.payload;
    });
    builder.addCase(getBlogCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      // @ts-ignore
      state.blogCategories = action.payload;
    });
  },
});

export const {} = blogCategorySlice.actions;

export default blogCategorySlice.reducer;
