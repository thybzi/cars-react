import {actions} from './actions';

export function reducer(state, action) {
    switch (action.type) {
        case actions.ITEM_FAVORITE_TOGGLE: {
            const {id} = action.payload;
            const favorites = new Set(state.favorites);

            if (favorites.has(id)) {
                favorites.delete(id);
            } else {
                favorites.add(id);
            }

            return {
                ...state,
                favorites,
            };
        }

        default:
            return state;
    }
}
