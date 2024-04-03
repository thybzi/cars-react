import {useLoaderData} from 'react-router-dom';
import {useAppSelector} from '../store/hooks';
import {selectCatalogState, selectSingleCatalogItem} from '../store/slices/catalog';
import {Menu} from '../components/Menu/Menu';
import {MainContent} from '../components/MainContent/MainContent';

export function ItemPage() {
    const itemId = useLoaderData() as string;
    const {status, error} = useAppSelector(selectCatalogState);
    const itemData = useAppSelector((state) => (selectSingleCatalogItem(state, itemId)));
    const isFavorite = useAppSelector((state) => (state.favorites.includes(itemId)));

    if (status === 'loading') {
        return <>Loading...</>;
    }

    if (status === 'error') {
        return <>Error: {error}</>;
    }

    if (!itemData) {
        return <>Error: item id {itemId} not found</>;
    }

    const {
        image,
        title,
        description,
    } = itemData;


    return (
        <>
            <Menu/>
            <MainContent>
                <img
                    src={image}
                    alt={`${title} photo`}
                />
                <h1>{title} {isFavorite && <small>(favorite!)</small>}</h1>
                <div>{description}</div>
            </MainContent>
        </>
    );
}
