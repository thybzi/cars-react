import {createAction} from '@reduxjs/toolkit';

export const toggleItemFavorite = createAction<{id: string}>('ITEM_FAVORITE_TOGGLE');
