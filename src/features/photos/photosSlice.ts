import { createSlice } from '@reduxjs/toolkit';

type PhotoT = string;

const initialState: PhotoT[] = [];

const slice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        addPhotos: (state, { payload }) => ({
            ...state,
            ...payload,
        }),
    },
});

export const photoReducer = slice.reducer;

export const getPhotos = (state: never) => state.photos;

export const { addPhotos } = slice.actions;
