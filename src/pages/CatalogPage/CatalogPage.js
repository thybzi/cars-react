import {useLoaderData} from 'react-router-dom';
import {MainContent} from '../../components/MainContent/MainContent';
import {CatalogContent} from '../../components/CatalogContent/CatalogContent';

export function CatalogPage() {
    const galleryItems = useLoaderData();

    return (
        <MainContent>
            <CatalogContent galleryItems={galleryItems}/>
        </MainContent>
    );
}
