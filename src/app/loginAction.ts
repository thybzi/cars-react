import type {ActionFunction} from 'react-router-dom';
import {loadUserToken} from '../api/loadUserToken';
import {removeUserToken, storeUserToken} from '../storage/session';

export const loginAction: ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
        const token = await loadUserToken(username, password);
        storeUserToken(token);
    } catch (ex) {
        removeUserToken();
    }

    return null;
};
