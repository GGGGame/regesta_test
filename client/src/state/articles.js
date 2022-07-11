import { createSlice } from "@reduxjs/toolkit";

export const articles = createSlice({
  name: "articles",
  initialState: [],
  reducers: {
    get: (state, action) => [...state, action.payload],
  },
});

export const fetchArticles = (url) => {
  return async (dispatch) => {
    const response = await fetch(url);
    const json = await response.json();

    dispatch(articles.actions.get(json));
  };
};
