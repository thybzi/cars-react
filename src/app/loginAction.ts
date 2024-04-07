import type {ActionFunction} from 'react-router-dom';
import {loadUserToken} from '../api/loadUserToken';
import {storeUserToken} from '../storage/session';

export const loginAction: ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const token = await loadUserToken(username, password);
    storeUserToken(token);

    return null;
};
