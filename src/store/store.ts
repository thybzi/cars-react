import {configureStore} from '@reduxjs/toolkit';
import {favoritesReducer} from './slices/favorites';
import {storeFavorites} from '../storage/local';

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => {
    const {favorites} = store.getState();
    storeFavorites(favorites);
});
