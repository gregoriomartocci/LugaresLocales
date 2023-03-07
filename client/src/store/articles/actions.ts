import { createAction } from "@reduxjs/toolkit";
import { Article } from "./types";

export const setArticles = createAction<Article[]>("articles/setArticles");
export const addArticle = createAction<Article>("articles/addArticle");
export const updateArticle = createAction<Article>("articles/updateArticle");
export const deleteArticle = createAction<number>("articles/deleteArticle");
