import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/UserSlice";
import productSlice from "./reducers/ProductSlice";

export const Store=configureStore({
    reducer:{
        user:userSlice,
        product:productSlice,
    }
})
