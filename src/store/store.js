import {createStore} from 'redux';
import {reducer} from './reducer';

const lsKey = 'cars';
const lsValue = localStorage.getItem(lsKey);

const initialState = lsValue ? JSON.parse(lsValue) : {
    favorites: [],
};

export const store = createStore(reducer, initialState);

store.subscribe(() => {
    localStorage.setItem(lsKey, JSON.stringify(store.getState()));
});
