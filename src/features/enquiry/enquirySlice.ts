import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import enquiryService from "./enquiryService.ts";
import { resetState } from "../../utils/reset_redux_states.ts";

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

// ** @@ DELETE ENQUIRY
export const deleteEnquiry = createAsyncThunk(
  "enquiry/delete-enquiry",
  async (id: string, thunkAPI: any) => {
    try {
      return await enquiryService.deleteEnquiry(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ GET ENQUIRY
export const getEnquiry = createAsyncThunk(
  "enquiry/get-enquiry",
  async (id: string, thunkAPI: any) => {
    try {
      return await enquiryService.getEnquiry(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// ** @@ UPDATE ENQUIRY
export const updateEnquiry = createAsyncThunk(
  "enquiry/update-enquiry",
  async (enquiryData: any, thunkAPI: any) => {
    try {
      return await enquiryService.updateEnquiry(enquiryData);
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
    builder
      .addCase(getEnquiries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnquiries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.enquiries = action.payload;
      })
      .addCase(getEnquiries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.errors;
      })
      .addCase(deleteEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.deletedEnquiry = action.payload;
      })
      .addCase(deleteEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.errros;
      })
      .addCase(getEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.enquiryName = action.payload.name;
        // @ts-ignore
        state.enquiryMobile = action.payload.mobile;
        // @ts-ignore
        state.enquiryEmail = action.payload.email;
        // @ts-ignore
        state.enquiryComment = action.payload.comment;
        // @ts-ignore
        state.enquiryStatus = action.payload.status;
      })
      .addCase(getEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.message = action.errors;
      })
      .addCase(updateEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        // @ts-ignore
        state.updatedEnquiry = action.payload;
      })
      .addCase(updateEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        // @ts-ignore
        state.enquiries = action.payload;
      })
      .addCase(resetState, () => initialState);
  },
});

export const {} = enquirySlice.actions;

export default enquirySlice.reducer;
