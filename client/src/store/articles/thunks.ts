import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "./types";
import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from "./api";
import { RootState } from "..";

export const fetchArticles = createAsyncThunk<Article[]>(
  "articles/fetchAll",
  async () => {
    const response = await getArticles();
    return response;
  }
);

export const fetchArticleById = createAsyncThunk<Article, string>(
  "articles/fetchById",
  async (id) => {
    const response = await getArticleById(id);
    return response;
  }
);

export const addNewArticle = createAsyncThunk<Article, Partial<Article>>(
  "articles/create",
  async (newArticle) => {
    const { id, title, content, category, createdAt, updatedAt } = newArticle;
    const response = await createArticle({
      id: id || "0",
      title: title!,
      content: content || "",
      category: category!,
      createdAt: createdAt || new Date(),
      updatedAt: updatedAt || new Date(),
    });
    return response;
  }
);

export const modifyArticle = createAsyncThunk<
  Article,
  { id: string; data: Partial<Article> }
>("articles/modify", async ({ id, data }) => {
  const response = await updateArticle(id, data);
  return response;
});

export const removeArticle = createAsyncThunk<void, string>(
  "articles/remove",
  async (id) => {
    await deleteArticle(id);
  }
);

export const selectArticles = (state: RootState) => state.articles.articles;

export const articleThunks = {
  fetchArticles,
  fetchArticleById,
  addNewArticle,
  modifyArticle,
  removeArticle,
};
