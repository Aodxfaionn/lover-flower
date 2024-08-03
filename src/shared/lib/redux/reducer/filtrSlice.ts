import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltrSliceState {
  category: string;
  sortPrice: string;
  filtrPriceMin: number;
  filtrPriceMax: number;
}

const initialState: FiltrSliceState = {
  category: "",
  sortPrice: "",
  filtrPriceMin: 0,
  filtrPriceMax: 0,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSortPice(state, action: PayloadAction<string>) {
      state.sortPrice = action.payload;
    },
    setFiltrPriceMin(state, action) {
      state.filtrPriceMin = action.payload;
    },
    setFiltrPriceMax(state, action) {
      state.filtrPriceMax = action.payload;
    },
  },
});

export const { setCategory, setSortPice, setFiltrPriceMin, setFiltrPriceMax } =
  filterSlice.actions;

export default filterSlice.reducer;
