import { configureStore } from "@reduxjs/toolkit";
import filter from "./reducer/filtrSlice";

export const store = configureStore({
    reducer: {
        filter,
    },
})