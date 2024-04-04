import {createReducer} from '@reduxjs/toolkit';
import {toggleItemFavorite} from './actions';
import type {RootState} from './store';


export const reducer = createReducer({
    favorites: [],
} as RootState, (builder) => {
    builder
        .addCase(toggleItemFavorite, (state, action) => {
            const {id} = action.payload;
            const favoritesSet = new Set(state.favorites);

            if (favoritesSet.has(id)) {
                favoritesSet.delete(id);
            } else {
                favoritesSet.add(id);
            }

            state.favorites = Array.from(favoritesSet);
        });
});
