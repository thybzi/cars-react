import {createReducer} from '@reduxjs/toolkit';
import {actions} from './actions';


export const reducer = createReducer({}, (builder) => {
    builder
        .addCase(actions.ITEM_FAVORITE_TOGGLE, (state, action) => {
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
