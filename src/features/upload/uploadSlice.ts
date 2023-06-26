import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import uploadService from "./uploadService.ts";

export interface uploadsState {}

// initial states
const initialState = {
  images: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ POST
export const uploadImg = createAsyncThunk(
  "upload/images",
  async (data, thunkAPI: any) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < data.length; i++) {
        formData.append("images", data[i]);
      }
      return await uploadService.uploadImg(formData);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

// ** @@ DELETE
export const deleteImg = createAsyncThunk(
  "delete/images",
  async (id: string, thunkAPI: any) => {
    try {
      return await uploadService.deleteImg(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const uploadSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = action.payload;
      })
      .addCase(uploadImg.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.images = action.payload;
      })
      .addCase(deleteImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteImg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = [];
      })
      .addCase(deleteImg.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.error;
      });
  },
});

export const {} = uploadSlice.actions;

export default uploadSlice.reducer;
