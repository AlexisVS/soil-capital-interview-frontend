import { configureStore } from '@reduxjs/toolkit';
import { api } from '@services';
import { authReducer } from '@features/auth';
import localStorageMiddleware from '@/Middleware/localStorageMiddleware';
import { photoReducer } from '@features/photos/photosSlice';

const localStorageKey = 'root'; // Same key used in localStorageMiddleware
const localStorageState = localStorage.getItem(localStorageKey);
let initialState = {};
if (localStorageState) {
    initialState = JSON.parse(localStorageState);
}

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
        photos: photoReducer,
    },
    preloadedState: { ...initialState },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware, localStorageMiddleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
