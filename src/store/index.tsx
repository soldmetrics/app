import { configureStore } from "@reduxjs/toolkit";

import globalSlice from "@slices/globalSlice";
import salesSlice from "@slices/salesSlice";

const store = configureStore({
  reducer: {
    sales: salesSlice,
    global: globalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
