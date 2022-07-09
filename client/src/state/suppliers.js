import { createSlice } from "@reduxjs/toolkit";

export const suppliers = createSlice({
  name: "suppliers",
  initialState: [],
  reducers: {
    get: (state, action) => [...state, action.payload],
  },
});

export const fetchSuppliers = (url) => {
  return async (dispatch) => {
    const response = await fetch(url);
    const json = await response.json();

    dispatch(suppliers.actions.get(json));
  };
};
