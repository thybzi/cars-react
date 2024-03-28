const storageKey = 'favoriteCars';

export const favoritesStorage = {

    getValue: () => {
        const storageValue = localStorage.getItem(storageKey);

        return storageValue ? JSON.parse(storageValue) : [];
    },

    setValue: (value) => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    },
};
