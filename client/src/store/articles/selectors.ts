import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Article } from "./types";

export const selectArticlesState = (state: RootState) => state.articles;

export const selectArticles = createSelector(
  [selectArticlesState],
  (articlesState) => articlesState.articles
);

export const selectArticleById = createSelector(
  [selectArticles, (_: RootState, id: string) => id],
  (articles, id) => articles.find((article: Article) => article.id === id)
);

export const selectFilteredArticles = createSelector(
  [selectArticles, (_: RootState, searchTerm: string) => searchTerm],
  (articles, searchTerm) =>
    articles.filter((article: Article) => article.title.includes(searchTerm))
);
