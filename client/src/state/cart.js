import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cartArticles",
  initialState: [],
  reducers: {
    add: (state, action) => [...state, action.payload],
    edit: (state, action) => [action.payload],
    remove: (state, action) =>
      state.filter((value, index) => index !== action.payload),
  },
});

export const addItem = (items) => {
  return (dispatch) => {
    dispatch(cart.actions.add(items));
  };
};

// this is used to increment or decrement items inside cart
// this actually have a bug, i can alter the amount, but every article is cleared except the one that is altered
export const editItem = (items, amount) => {
  return (dispatch) => {
    var currentItem = Object.assign({}, items);
    if (amount < 0) {
      currentItem.amount--;
    } else {
      currentItem.amount++;
    }

    dispatch(cart.actions.edit(currentItem));
  };
};

export const removeItem = (items) => {
  return (dispatch) => {
    dispatch(cart.actions.remove(items));
  };
};
