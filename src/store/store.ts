import {configureStore} from '@reduxjs/toolkit';
import {storeFavorites} from '../storage/local';
import {userReducer} from './slices/user';
import {favoritesReducer} from './slices/favorites';

export const store = configureStore({
    reducer: {
        user: userReducer,
        favorites: favoritesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => {
    const {favorites} = store.getState();
    storeFavorites(favorites);
});
