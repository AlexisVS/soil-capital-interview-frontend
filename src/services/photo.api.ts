import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const photosApi = createApi({
    reducerPath: 'photosApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_URL,
    }),
    endpoints: (builder) => ({
        // Define a query endpoint for fetching photos
        getPhotos: builder.query({
            query: () => 'photos', // Adjust the URL as needed for your API
        }),
    }),
});

// Export the useGetPhotosQuery hook
export const { useGetPhotosQuery } = photosApi;
