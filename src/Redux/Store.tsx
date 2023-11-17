import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "./API/pokemonApi";
import { counterSlice } from "./Slices/appSlice";

export const Store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    // @ts-ignore
    counter: counterSlice,
  },
  //   @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(Store.dispatch);

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
