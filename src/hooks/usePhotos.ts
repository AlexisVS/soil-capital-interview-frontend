import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { getPhotos } from '@features/photos/photosSlice';

export const usePhotos = () => {
    const photos = useSelector(getPhotos);

    return useMemo(() => Object.values(photos), [photos]);
};
