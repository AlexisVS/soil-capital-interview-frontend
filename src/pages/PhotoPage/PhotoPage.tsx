import { usePhotosMutation } from '@services/photo.api';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { usePhotos } from '@hooks/usePhotos';
import { addPhotos } from '@features/photos/photosSlice';

function PhotoPage() {
    const dispatch = useDispatch();
    const [photos] = usePhotosMutation();
    const fetchPhotos = async () => {
        const response = await photos();
        dispatch(addPhotos(response.data));
    };
    const photosGallery = usePhotos() as string[];

    useEffect(() => {
        fetchPhotos();
    }, []);

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        justifyContent: 'space-between',
    };

    const imgStyle = {
        objectFit: 'cover',
        maxWidth: '100%',
        width: 100 / 3 + '%',
        minWidth: '33%',
        height: 'auto',
    };

    return (
        <div style={containerStyle}>
            {photosGallery.map((url, index) => (
                <img style={imgStyle} key={url + index} src={url} alt={`Image`} />
            ))}
        </div>
    );
}

export default PhotoPage;
