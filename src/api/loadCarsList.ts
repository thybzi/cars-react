import {carsApiUrl} from './values';
import type {CarItemData} from './types';
import {processItemData} from '../helpers/processItemData';

export const loadCarsList = async () => {
    const res = await fetch(carsApiUrl);
    const data = await res.json() as CarItemData[];

    return data.map(processItemData);
};
