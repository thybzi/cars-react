import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';

const lsKey = 'cars';
const lsValue = localStorage.getItem(lsKey);

export type RootState = {
    favorites: string[]
};

const initialState = lsValue
    ? JSON.parse(lsValue) as RootState
    : {
        favorites: [],
    } as RootState;

export const store = configureStore({
    reducer,
    preloadedState: initialState,
});

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
    localStorage.setItem(lsKey, JSON.stringify(store.getState()));
});
