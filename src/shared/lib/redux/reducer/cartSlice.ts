import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { itemCart } from "types/types";

interface CartSliceState {
  items: itemCart[];
  totalPrice: number;
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const findItem = state.items.find(
        (item: { id: number }) => item.id === action.payload.id
      );
      if (findItem) findItem.count++;
      else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce(
        (sum: number, item: { price: number; count: number }) => {
          return item.price * item.count + sum;
        },
        0
      );
    },
    removeProduct(state: any, action: PayloadAction<number>) {
      const findItem = state.items.find(
        (item: { id: number }) => item.id === action.payload
      );
      state.totalPrice = state.totalPrice - findItem.price * findItem.count;
      state.items = state.items.filter(
        (item: { id: number }) => item.id != action.payload
      );
    },
    minusProduct(state: any, action: PayloadAction<number>) {
      const findItem = state.items.find(
        (item: { id: number }) => item.id === action.payload
      );
      if (findItem) findItem.count--;
      state.totalPrice = state.totalPrice - findItem.price;
    },
  },
});

export const { addProduct, removeProduct, minusProduct } = cartSlice.actions;

export default cartSlice.reducer;
