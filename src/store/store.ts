import {configureStore} from '@reduxjs/toolkit';
import {favoritesReducer} from './slices/favorites';
import {storeFavorites} from '../storage/local';
import {userReducer} from './slices/user';

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        user: userReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => {
    const {favorites} = store.getState();
    storeFavorites(favorites);
});
