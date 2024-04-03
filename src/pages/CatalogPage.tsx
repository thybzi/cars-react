import {useLoaderData} from 'react-router-dom';
import type {CarItemData} from '../api/types';
import {useAppSelector} from '../store/hooks';
import {selectCatalogState, selectCatalogItems} from '../store/slices/catalog';
import {Menu} from '../components/Menu/Menu';
import {MainContent} from '../components/MainContent/MainContent';
import {CatalogContent} from '../components/CatalogContent/CatalogContent';

export function CatalogPage() {
    const galleryItemsIds = useLoaderData() as string[] | null;
    const {status, error} = useAppSelector(selectCatalogState);

    if (status === 'loading') {
        return <>Loading...</>;
    }

    if (status === 'error') {
        return <>Error: {error}</>;
    }

    const galleryItems = useAppSelector(
        (state) => (selectCatalogItems(state, galleryItemsIds || undefined)),
    ) as CarItemData[];

    return (
        <>
            <Menu/>
            <MainContent>
                <CatalogContent galleryItems={galleryItems}/>
            </MainContent>
        </>
    );
}
