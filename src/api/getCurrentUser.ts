import type {UserData} from './types';
import {userGetCurrentApiUrl} from './values';

export async function getCurrentUser(token: string) {
    const res = await fetch(userGetCurrentApiUrl, {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`},
    });

    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }

    return await res.json() as UserData;
}
