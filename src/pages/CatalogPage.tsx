import {useLoaderData} from 'react-router-dom';
import {Menu} from '../components/Menu/Menu';
import {MainContent} from '../components/MainContent/MainContent';
import {CatalogContent} from '../components/CatalogContent/CatalogContent';
import type {CatalogItemProps} from '../components/CatalogItem/CatalogItem';

export function CatalogPage() {
    const galleryItems = useLoaderData() as CatalogItemProps[];

    return (
        <>
            <Menu/>
            <MainContent>
                <CatalogContent galleryItems={galleryItems}/>
            </MainContent>
        </>
    );
}
