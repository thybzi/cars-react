import {createReducer} from '@reduxjs/toolkit';
import {toggleItemFavorite} from './actions';


export const reducer = createReducer({}, (builder) => {
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
