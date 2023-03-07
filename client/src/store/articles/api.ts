import axios from "axios";
import { Article } from "./types";

const BASE_URL = "http://localhost:3000/api";

export const getArticles = async (): Promise<Article[]> => {
  const response = await axios.get(`${BASE_URL}/articles`);
  return response.data;
};

export const getArticleById = async (id: string): Promise<Article> => {
  const response = await axios.get(`${BASE_URL}/articles/${id}`);
  return response.data;
};

export const createArticle = async (data: Article): Promise<Article> => {
  const response = await axios.post(`${BASE_URL}/articles`, data);
  return response.data;
};

export const updateArticle = async (
  id: string,
  data: Partial<Article>
): Promise<Article> => {
  const response = await axios.patch(`${BASE_URL}/articles/${id}`, data);
  return response.data;
};

export const deleteArticle = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/articles/${id}`);
};
