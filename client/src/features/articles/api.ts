import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Article } from "../../interfaces";

const baseUrl = "http://localhost:4000";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getArticles: builder.query<Article[], void>({
      query: () => "/articles",
    }),
    createArticle: builder.mutation<Article, Partial<Article>>({
      query: (body) => ({
        url: "/articles",
        method: "POST",
        body,
      }),
    }),
    updateArticle: builder.mutation<Article, Partial<Article>>({
      query: ({ id, ...body }) => ({
        url: `/articles/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteArticle: builder.mutation<void, number>({
      query: (id) => ({
        url: `/articles/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articlesApi;
