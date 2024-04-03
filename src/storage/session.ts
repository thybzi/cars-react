const sesKey = 'cars';
const sesValue = sessionStorage.getItem(sesKey);

type SessionStorageData = {
    userToken?: string
};

const sesData = (sesValue ? JSON.parse(sesValue) : {}) as SessionStorageData;

export function readUserToken() {
    return sesData.userToken;
}

export function storeUserToken(token: string) {
    sesData.userToken = token;
    sessionStorage.setItem(sesKey, JSON.stringify(sesData));
}

export function removeUserToken() {
    delete sesData.userToken;
    sessionStorage.setItem(sesKey, JSON.stringify(sesData));
}
