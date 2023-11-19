import { createSlice } from "@reduxjs/toolkit";
import { IApp } from "../../Types/IApp";

const initialState: IApp = {
  isFormOpen: false,
  selectedId: "",
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
    setEditId: (state, action) => {
      state.selectedId = action.payload;
    },
    resetEditId: (state, action) => {
      state.selectedId = "";
    },
  },
});

export const {
  setIsFormOpenInStore,
  resetIsFormOpenInStore,
  setEditId,
  resetEditId,
} = appSlice.actions;

export default appSlice.reducer;
