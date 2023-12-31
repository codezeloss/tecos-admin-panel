import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogService from "./blogService.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

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

// ** @@ PUT BLOG
export const updateBlog = createAsyncThunk(
  "blog/update-blog",
  async (blogData, thunkAPI: any) => {
    try {
      return await blogService.updateBlog(blogData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ GET BLOG
export const getBlog = createAsyncThunk(
  "blog/get-blog",
  async (id: string, thunkAPI: any) => {
    try {
      return await blogService.getBlog(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ DELETE BLOG
export const deleteBlog = createAsyncThunk(
  "blog/delete-blog",
  async (id: string, thunkAPI: any) => {
    try {
      return await blogService.deleteBlog(id);
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
      })
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.blogName = action.payload.title;
        // @ts-ignore
        state.blogDescription = action.payload.description;
        // @ts-ignore
        state.blogCategory = action.payload.category;
        // @ts-ignore
        state.blogImages = action.payload.images;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(updateBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.updatedBlog = action.payload;
        // @ts-ignore
        state.updatedDescription = action.payload;
        // @ts-ignore
        state.updatedCategory = action.payload;
        // @ts-ignore
        state.updatedImages = action.payload;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(deleteBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.deletedBlog = action.payload;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export const {} = blogSlice.actions;

export default blogSlice.reducer;
