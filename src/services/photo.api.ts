import { api } from '@services/api.service';

export const photosApi = api.injectEndpoints({
    endpoints: (builder) => ({
        photos: builder.mutation({
            query: () => {
                return {
                    url: 'photos',
                    method: 'GET',
                };
            },
            transformResponse: (response) => {
                const result = response as Array<{ url: string }>;
                console.log(
                    'res',
                    result.map((photo) => photo.url),
                );
                return result.map((photo) => photo.url);
            },
        }),
    }),
});

// Export the useGetPhotosQuery hook
export const { usePhotosMutation } = photosApi;
