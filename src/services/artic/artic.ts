import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { GetArtworkDetailsResponse, GetArtworksResponse } from './types';

export const artic = createApi({
  reducerPath: 'artic',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1' }),
  endpoints: (builder) => ({
    getArtworks: builder.query<GetArtworksResponse, number | void>({
      query: (page = 1) => `/artworks`,
    }),
    getArtworkDetails: builder.query<GetArtworkDetailsResponse, string>({
      query: (id) => {
        const fields = [
          'artist_display',
          'credit_line',
          'date_display',
          'description',
          'dimensions',
          'image_id',
          'inscriptions',
          'main_reference_number',
          'medium_display',
          'place_of_origin',
          'thumbnail',
          'title',
        ].concat(',');
        return `/artworks/${id}?fields=${fields}`;
      },
    }),
  }),
});

export const { useGetArtworksQuery, useGetArtworkDetailsQuery } = artic;
