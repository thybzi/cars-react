import {useLoaderData} from 'react-router-dom';
import {Menu} from '../components/Menu/Menu';
import {MainContent} from '../components/MainContent/MainContent';
import {CatalogContent} from '../components/CatalogContent/CatalogContent';

export function CatalogPage() {
    const galleryItems = useLoaderData();

    return (
        <>
            <Menu/>
            <MainContent>
                <CatalogContent galleryItems={galleryItems}/>
            </MainContent>
        </>
    );
}
