import type {ActionFunction} from 'react-router-dom';
import {loginUser} from '../api/loginUser';
import {removeUserToken, storeUserToken} from '../storage/session';

export const loginAction: ActionFunction = async ({request}) => {
    const formData = await request.formData();
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
        const {token} = await loginUser(username, password);
        storeUserToken(token);
    } catch (ex) {
        removeUserToken();
    }

    return null;
};
