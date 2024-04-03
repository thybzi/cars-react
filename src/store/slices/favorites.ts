import {createAction, createReducer} from '@reduxjs/toolkit';
import {readFavorites} from '../../storage/local';

type FavoritesState = string[];
const initialState = readFavorites() || [] as FavoritesState;

export const toggleItemFavorite = createAction<{id: string}>('favorites/toggleItem');

export const favoritesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(toggleItemFavorite, (state, action) => {
            const {id} = action.payload;

            if (state.includes(id)) {
                state.splice(state.indexOf(id), 1);
            } else {
                state.push(id);
            }
        });
});
