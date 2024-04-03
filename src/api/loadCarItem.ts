import {carsApiUrl} from './values';
import type {CarItemData} from './types';
import {processItemData} from '../helpers/processItemData';


export const loadCarItem = async (id: string) => {
    const res = await fetch(`${carsApiUrl}/${id}`);

    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }

    const data = await res.json() as CarItemData;

    return processItemData(data);
};
