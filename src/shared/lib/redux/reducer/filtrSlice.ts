import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  sortPrice: "",
  filtrPriceMin: 0,
  filtrPriceMax: 0,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSortPice(state, action) {
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
