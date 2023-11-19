import { createSlice } from "@reduxjs/toolkit";
import { IApp } from "../../Types/IApp";

const initialState: IApp = {
  isFormOpen: false,
};

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setIsFormOpenInStore: (state, action) => {
      state.isFormOpen = true;
    },
    resetIsFormOpenInStore: (state, action) => {
      state.isFormOpen = false;
    },
  },
});

export const { setIsFormOpenInStore, resetIsFormOpenInStore } =
  appSlice.actions;

export default appSlice.reducer;
