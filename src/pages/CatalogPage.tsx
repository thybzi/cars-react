import {useLoaderData} from 'react-router-dom';
import {Menu} from '../components/Menu/Menu';
import {MainContent} from '../components/MainContent/MainContent';
import {CatalogContent} from '../components/CatalogContent/CatalogContent';
import type {CarItemData} from '../api/types';

export function CatalogPage() {
    const galleryItems = useLoaderData() as CarItemData[];

    return (
        <>
            <Menu/>
            <MainContent>
                <CatalogContent galleryItems={galleryItems}/>
            </MainContent>
        </>
    );
}
