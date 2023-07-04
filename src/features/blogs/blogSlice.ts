import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogService from "./blogService.ts";

export interface blogsState {}

// initial states
const initialState = {
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ GET ALL BLOGS
export const getBlogs = createAsyncThunk(
  "blog/get-blogs",
  async (thunkAPI: any) => {
    try {
      return await blogService.getBlogs();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

// ** @@ POST BLOG POST
export const createBlog = createAsyncThunk(
  "blog/create-blog",
  async (blogData, thunkAPI: any) => {
    try {
      return await blogService.createBlog(blogData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.blogs = action.payload;
      })
      .addCase(createBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.createdBlog = action.payload;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      });
  },
});

export const {} = blogSlice.actions;

export default blogSlice.reducer;
