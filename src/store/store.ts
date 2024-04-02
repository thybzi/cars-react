import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';

const lsKey = 'cars';
const lsValue = localStorage.getItem(lsKey);

export type RootState = {
    favorites: string[]
};

export function getDefaultState(): RootState {
    return {
        favorites: [],
    };
}

const initialState = lsValue ? JSON.parse(lsValue) as RootState : getDefaultState();

export const store = configureStore({
    reducer,
    preloadedState: initialState,
});

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
    localStorage.setItem(lsKey, JSON.stringify(store.getState()));
});
