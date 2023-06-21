import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.ts";
import customerReducer from "../features/customers/customerSlice.ts";
import productReducer from "../features/product/productSlice.ts";
import brandReducer from "../features/brand/brandSlice.ts";
import productCategoryReducer from "../features/productCategory/productCategorySlice.ts";
import productColorReducer from "../features/productColor/productColorSlice.ts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    productCategory: productCategoryReducer,
    productColor: productColorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
