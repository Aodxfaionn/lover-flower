import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filter from "./reducer/filtrSlice";
import cart from "./reducer/cartSlice";

export const store = configureStore({
    reducer: {
        filter,
        cart,
    },
})

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();