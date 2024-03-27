import {actions} from './actions';

export function reducer(state, action) {
    switch (action.type) {
        case actions.ITEM_FAVORITE_TOGGLE: {
            const {id} = action.payload;
            const favoritesSet = new Set(state.favorites);

            if (favoritesSet.has(id)) {
                favoritesSet.delete(id);
            } else {
                favoritesSet.add(id);
            }

            return {
                ...state,
                favorites: Array.from(favoritesSet),
            };
        }

        default:
            return state;
    }
}
