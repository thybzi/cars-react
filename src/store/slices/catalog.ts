import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {loadCarsList} from '../../api/loadCarsList';
import type {CarItemData} from '../../api/types';
import type {RootState} from '../store';

export const fetchCatalogData = createAsyncThunk(
    'catalog/fetchCatalogData',
    loadCarsList,
);

export const getCatalogItems = createAction<{ids?: string[]}>('catalog/getCatalogItems');

export const fetchFavoritesCatalogData = createAsyncThunk(
    'catalog/fetchFavoritesCatalogData',
    async (favorites: string[]) => {
        const data = await loadCarsList();
        return data.filter(({id}) => (favorites.includes(id)));
    },
);

type CatalogState = {
    status: 'idle' | 'loading' | 'success' | 'error'
    data: CarItemData[] | null
    error: string | null
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        status: 'idle',
        data: null,
        error: null,
    } as CatalogState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCatalogData.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            })
            .addCase(fetchCatalogData.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message as string;
            });
    },
});

export const catalogReducer = catalogSlice.reducer;


export function selectCatalogState(state: RootState) {
    return state.catalog;
}

export function selectCatalogItems(state: RootState, idList?: string[]) {
    if (!state.catalog.data) {
        return null;
    }

    if (idList) {
        return state.catalog.data.filter(({id}) => (idList.includes(id)));
    }

    return state.catalog.data;
}

export function selectSingleCatalogItem(state: RootState, itemId: string) {
    return state.catalog.data?.find(({id}) => (id === itemId)) || null;
}
