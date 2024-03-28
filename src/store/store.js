import {createStore} from 'redux';
import {reducer} from './reducer';
import {favoritesStorage} from '../storage/favoritesStorage';

export const store = createStore(reducer, {
    favorites: favoritesStorage.getValue(),
});

store.subscribe(() => {
    const {favorites} = store.getState();
    favoritesStorage.setValue(favorites);
});
