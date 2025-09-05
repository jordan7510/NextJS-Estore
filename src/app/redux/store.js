import { configureStore } from "@reduxjs/toolkit";
import userReducers from "@/app/redux/userSlice"

export const store = configureStore({
    reducer:{
        user:userReducers,
    }
})
