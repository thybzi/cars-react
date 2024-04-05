import type {UserData} from './types';
import {userGetCurrentApiUrl} from './values';

export async function loadUserData(token: string) {
    const res = await fetch(userGetCurrentApiUrl, {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`},
    });

    const data = await res.json() as UserData;

    return data;
}
