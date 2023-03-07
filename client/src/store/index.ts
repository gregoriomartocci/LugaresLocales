import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articles/reducers";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
