import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@store/index";

interface GlobalState {
  appIsReady: boolean;
  fontsIsLoaded: boolean;
  fontsIsError: boolean;
};

const initialState: GlobalState = {
  appIsReady: false,
  fontsIsLoaded: false,
  fontsIsError: false,
};

export const globalSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    setAppIsReady: (state, action: PayloadAction<boolean>) => {
      state = {
        ...state,
        appIsReady: action.payload,
      };
    },
    setFontsIsLoaded: (state, action: PayloadAction<boolean>) => {
      state = {
        ...state,
        fontsIsLoaded: action.payload,
      };
    },
    setFontsIsError: (state, action: PayloadAction<boolean>) => {
      state = {
        ...state,
        fontsIsError: action.payload,
      };
    },
  },
});

export const { setAppIsReady, setFontsIsLoaded, setFontsIsError } = globalSlice.actions;

export const getAllState = (state: RootState) => state.global;

export default globalSlice.reducer;
