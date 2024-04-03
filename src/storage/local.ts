const lsKey = 'cars';
const lsValue = localStorage.getItem(lsKey);

type LocalStorageData = {
    favorites?: string[]
};

const lsData = (lsValue ? JSON.parse(lsValue) : {}) as LocalStorageData;

export function readFavorites() {
    return lsData.favorites;
}

export function storeFavorites(favorites: string[]) {
    lsData.favorites = favorites;
    localStorage.setItem(lsKey, JSON.stringify(lsData));
}
