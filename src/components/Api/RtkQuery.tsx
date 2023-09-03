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
        }
      })
    }),
    getArticle: build.query({
      query: (slug) => ({
        url: `articles/${slug}`,
      })
    })
  })
})

export const { useGetArticlesQuery, useGetArticleQuery } = articleApi;