import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {favoritesStorage} from '../storage/favoritesStorage';

export const store = configureStore({
    reducer,
    preloadedState: {
        favorites: favoritesStorage.getValue(),
    },
});

store.subscribe(() => {
    const {favorites} = store.getState();
    favoritesStorage.setValue(favorites);
});
