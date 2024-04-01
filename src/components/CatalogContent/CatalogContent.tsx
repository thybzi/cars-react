import {useState} from 'react';
import {CatalogItemsGallery} from '../CatalogItemsGallery/CatalogItemsGallery';
import type {CatalogItemProps} from '../CatalogItem/CatalogItem';
import {CatalogMore} from '../CatalogMore/CatalogMore';

interface CatalogContentProps {
    galleryItems: CatalogItemProps[]
}

export function CatalogContent({
    galleryItems = [],
}: CatalogContentProps) {
    const ITEMS_LIMIT = 3;
    const [shownItemsCount, setShownItemsCount] = useState(ITEMS_LIMIT);

    function showMoreItems() {
        setShownItemsCount(
            Math.min(
                shownItemsCount + ITEMS_LIMIT,
                galleryItems.length,
            ),
        );
    }

    return (
        <>
            <CatalogItemsGallery
                items={galleryItems.slice(0, shownItemsCount)}
            />
            {(shownItemsCount < galleryItems.length) && (
                <CatalogMore
                    buttonOnclick={showMoreItems}
                    galleryItemsCount={galleryItems.length}
                />
            )}
        </>
    );
}
