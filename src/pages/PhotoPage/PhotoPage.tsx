import { photosApi, useGetPhotosQuery } from '@services/photo.api';

function PhotoPage() {
    // Use the useGetPhotosQuery hook to fetch photos
    const useGetPokemonByNameQuery = photosApi.endpoints.getPhotos.useQuery;

    console.log(useGetPokemonByNameQuery());
    return (
        <div>
            <h1>Photo Page</h1>
        </div>
    );
}

export default PhotoPage;
