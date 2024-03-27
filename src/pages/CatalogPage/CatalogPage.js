import {useLoaderData} from 'react-router-dom';
import {CatalogContent} from '../../components/CatalogContent/CatalogContent';

export function CatalogPage() {
    const galleryItems = useLoaderData();

    return (
        <CatalogContent galleryItems={galleryItems}/>
    );
}
