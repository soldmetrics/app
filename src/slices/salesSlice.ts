import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@store/index";

interface Sale {

};

interface SalesState {
  items: Sale[];
  isLoading: boolean;
};

const initialState: SalesState = {
  items: [],
  isLoading: false,
};

export const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    setSales: (state, action: PayloadAction<Sale[]>) => {
      state.items = action.payload;
    },
    incrementSales: (state, action: PayloadAction<Sale[]>) => {
      state.items = [
        ...state.items,
        ...action.payload,
      ];
    },
  },
});

export const { setSales, incrementSales } = salesSlice.actions;

export const selectItems = (state: RootState) => state.sales.items;

export default salesSlice.reducer;
