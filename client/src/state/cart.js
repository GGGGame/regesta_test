import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cartArticles",
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    remove: (state, action) =>
      state.filter((value, index) => index !== action.payload),
  },
});

export const addItem = (items) => {
  return (dispatch) => {
    dispatch(cart.actions.add(items));
  };
};

export const removeItem = (items) => {
  return (dispatch) => {
    dispatch(cart.actions.remove(items));
  };
};
