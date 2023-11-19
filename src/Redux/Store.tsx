import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import appSlice from "./Slices/appSlice";
import { jobsApi } from "./API/jobsApi";

export const Store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
    // @ts-ignore
    app: appSlice,
  },
  //   @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});

setupListeners(Store.dispatch);

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
