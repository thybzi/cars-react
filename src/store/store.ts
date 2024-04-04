import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {readFavorites, storeFavorites} from '../storage/local';

export type RootState = {
    favorites: string[]
};

const initialState = {
    favorites: readFavorites() || [],
} as RootState;

export const store = configureStore({
    reducer,
    preloadedState: initialState,
});

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
    const {favorites} = store.getState();
    storeFavorites(favorites);
});
