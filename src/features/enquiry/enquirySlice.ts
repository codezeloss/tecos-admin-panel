import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import enquiryService from "./enquiryService.ts";

export interface enquiriesState {}

// initial states
const initialState = {
  enquiries: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// ** @@ GET ALL ENQUIRIES
export const getEnquiries = createAsyncThunk(
  "enquiry/get-enquiries",
  async (thunkAPI: any) => {
    try {
      return await enquiryService.getEnquiries();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
// **

export const enquirySlice = createSlice({
  name: "enquiries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEnquiries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEnquiries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.enquiries = action.payload;
    });
    builder.addCase(getEnquiries.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      // @ts-ignore
      state.enquiries = action.payload;
    });
  },
});

export const {} = enquirySlice.actions;

export default enquirySlice.reducer;
