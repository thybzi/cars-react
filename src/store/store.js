import {createStore} from 'redux';
import {reducer} from './reducer';

const initialState = {
    favorites: [],
};

export const store = createStore(reducer, initialState);
