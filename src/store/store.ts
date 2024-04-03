import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {readFavorites, storeFavorites} from '../storage/local';

export type RootState = {
    favorites: string[]
};

export function getDefaultState(): RootState {
    return {
        favorites: readFavorites() || [],
    };
}

const initialState = getDefaultState();

export const store = configureStore({
    reducer,
    preloadedState: initialState,
});

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
    const {favorites} = store.getState();
    storeFavorites(favorites);
});
