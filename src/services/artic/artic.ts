import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { GetArtworksResponse } from './types';

export const artic = createApi({
  reducerPath: 'artic',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1' }),
  endpoints: (builder) => ({
    getArtworks: builder.query<GetArtworksResponse, number | void>({
      query: (page = 1) => `/artworks`,
    }),
    getArtworkDetails: builder.query<unknown, string>({
      query: (id) => `/artworks/${id}`,
    }),
  }),
});

export const { useGetArtworksQuery, useGetArtworkDetailsQuery } = artic;
