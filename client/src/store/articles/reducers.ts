import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "./types";

interface ArticlesState {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    getArticlesStart(state) {
      state.loading = true;
      state.error = null;
    },
    getArticlesSuccess(state, action: PayloadAction<Article[]>) {
      state.articles = action.payload;
      state.loading = false;
      state.error = null;
    },
    getArticlesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getArticlesStart, getArticlesSuccess, getArticlesFailure } =
  articlesSlice.actions;

export default articlesSlice.reducer;
