import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import colorService from "./colorService.ts";

export interface colorsState {}

// initial states
const initialState = {
  colors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ GET ALL COLORS
export const getColors = createAsyncThunk(
  "color/get-colors",
  async (thunkAPI: any) => {
    try {
      return await colorService.getColors();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getColors.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getColors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.colors = action.payload;
      state.message = "success";
    });
    builder.addCase(getColors.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      // @ts-ignore
      state.message = action.error;
    });
  },
});

export const {} = colorSlice.actions;

export default colorSlice.reducer;