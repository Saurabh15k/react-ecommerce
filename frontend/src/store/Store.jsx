import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/UserSlice";

export const Store=configureStore({
    reducer:{
        user:userSlice,
    }
})
