import {useLoaderData} from 'react-router-dom';
import {CatalogContent} from '../components/CatalogContent/CatalogContent';
import type {CarItemData} from '../api/types';

export function CatalogPage() {
    const galleryItems = useLoaderData() as CarItemData[];

    return (
        <>
            <CatalogContent galleryItems={galleryItems}/>
        </>
    );
}
