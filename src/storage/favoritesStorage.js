const storageKey = 'favoriteCars';

export const favoritesStorage = {

    getValue: () => {
        const storageValue = localStorage.getItem(storageKey);

        return new Set(storageValue ? JSON.parse(storageValue) : []);
    },

    setValue: (value) => {
        localStorage.setItem(storageKey, JSON.stringify([...value]));
    },
};
