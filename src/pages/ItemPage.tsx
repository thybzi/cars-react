import {useLoaderData} from 'react-router-dom';
import {useAppSelector} from '../store/hooks';
import type {CarItemData} from '../api/types';

export function ItemPage() {
    const {
        id,
        image,
        title,
        description,
    } = useLoaderData() as CarItemData;

    const isFavorite = useAppSelector((state) => (state.favorites.includes(id)));

    return (
        <>
            <img
                src={image}
                alt={`${title} photo`}
            />
            <h1>{title} {isFavorite && <small>(favorite!)</small>}</h1>
            <div>{description}</div>
        </>
    );
}
