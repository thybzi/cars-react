import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';

export type RootState = {
    favorites: string[]
};

const lsKey = 'cars';
const lsValue = localStorage.getItem(lsKey);

const initialState = lsValue ? JSON.parse(lsValue) : {
    favorites: [],
};

export const store = configureStore({
    reducer,
    preloadedState: initialState,
});

export type AppDispatch = typeof store.dispatch;


store.subscribe(() => {
    localStorage.setItem(lsKey, JSON.stringify(store.getState()));
});