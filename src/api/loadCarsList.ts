import {carsApiUrl} from './values';
import {processItemData} from '../helpers/processItemData';
import type {CarItemData} from './types';

export const loadCarsList = async () => {
    const res = await fetch(carsApiUrl);

    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
    }

    const data = await res.json() as CarItemData[];
    return data.map(processItemData);
};
