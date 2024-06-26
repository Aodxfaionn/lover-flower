import { configureStore } from "@reduxjs/toolkit";
import filter from "./reducer/filtrSlice";
import cart from "./reducer/cartSlice";

export const store = configureStore({
    reducer: {
        filter,
        cart,
    },
})