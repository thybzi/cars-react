import {processItemData} from '../helpers/processItemData';
import type {CarItemData} from './types';
import {carsApiUrl} from './values';

export const loadCarItem = async (itemId: string) => {
    const res = await fetch(`${carsApiUrl}/${itemId}`);
    const data = await res.json() as CarItemData;

    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }

    return processItemData(data);
};
