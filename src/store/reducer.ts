import {createReducer} from '@reduxjs/toolkit';
import {toggleItemFavorite} from './actions';
import type {RootState} from './store';
import {getDefaultState} from './store';


export const reducer = createReducer(getDefaultState(), (builder) => {
    builder
        .addCase(toggleItemFavorite, (state: RootState, action) => {
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
