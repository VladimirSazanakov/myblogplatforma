import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://blog.kata.academy/api/',
  }),
  endpoints: (build) => ({
    getArticles: build.query({
      query: ({ limit = 5, offset = 0 }) => ({
        url: 'articles',
        params: {
          limit: limit,
          offset: offset,
        },
      }),
    }),
    getArticle: build.query({
      query: (slug) => ({
        url: `articles/${slug}`,
      }),
    }),
    getUser: build.query({
      query: (api) = ({
        url: 'user',
      }),
    }),
    registerNewUser: build.mutation({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body: body,
      }),
    }),
    userLogin: build.mutation({
      query: (body) => ({
        url: 'users/login',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticleQuery, useRegisterNewUserMutation, useUserLoginMutation } = articleApi;
