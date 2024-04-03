import {useLoaderData} from 'react-router-dom';
import type {CarItemData} from '../api/types';
import {CatalogContent} from '../components/CatalogContent/CatalogContent';

export function CatalogPage() {
    const galleryItems = useLoaderData() as CarItemData[];

    return (
        <>
            <CatalogContent galleryItems={galleryItems}/>
        </>
    );
}
