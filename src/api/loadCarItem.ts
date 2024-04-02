import {carsApiUrl} from './values';
import type {CarItemData} from './types';
import {processItemData} from '../helpers/processItemData';


export const loadCarItem = async (id: string) => {
    const res = await fetch(`${carsApiUrl}/${id}`);
    const data = await res.json() as CarItemData;

    return processItemData(data);
};
