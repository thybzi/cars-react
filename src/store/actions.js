export const actions = {
    ITEM_FAVORITE_TOGGLE: 'ITEM_FAVORITE_TOGGLE',
};

export const toggleItemFavorite = (id) => ({
    type: actions.ITEM_FAVORITE_TOGGLE,
    payload: {id},
});
