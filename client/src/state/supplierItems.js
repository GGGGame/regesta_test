import { createSlice } from "@reduxjs/toolkit";

export const supplierItems = createSlice({
  name: "supplierItems",
  initialState: [],
  reducers: {
    get: (state, action) => [action.payload],
  },
});

export const fetchSupplierItems = (url, filter) => {
  return async (dispatch) => {
    const response = await fetch(url);
    const json = await response.json();

    dispatch(supplierItems.actions.get(json));
  };
};
