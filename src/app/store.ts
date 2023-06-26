import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.ts";
import customerReducer from "../features/customers/customerSlice.ts";
import productReducer from "../features/product/productSlice.ts";
import brandReducer from "../features/brand/brandSlice.ts";
import productCategoryReducer from "../features/productCategory/productCategorySlice.ts";
import colorReducer from "../features/color/colorSlice.ts";
import productColorReducer from "../features/productColor/productColorSlice.ts";
import blogReducer from "../features/blogs/blogSlice.ts";
import blogCategoryReducer from "../features/blogCategory/blogCategorySlice.ts";
import enquiryReducer from "../features/enquiry/enquirySlice.ts";
import orderReducer from "../features/order/orderSlice.ts";
import uploadReducer from "../features/upload/uploadSlice.ts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    productCategory: productCategoryReducer,
    color: colorReducer,
    productColor: productColorReducer,
    blog: blogReducer,
    blogCategory: blogCategoryReducer,
    enquiry: enquiryReducer,
    order: orderReducer,
    upload: uploadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
