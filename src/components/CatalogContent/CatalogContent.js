import './CatalogContent.css';
import {useState} from 'react';
import {CatalogItemsGallery} from '../CatalogItemsGallery/CatalogItemsGallery';
import {CatalogMore} from '../CatalogMore/CatalogMore';

export function CatalogContent({
    galleryItems = [],
}) {
    const ITEMS_LIMIT = 3;

    const [shownItemsCount, setShownItemsCount] = useState(ITEMS_LIMIT);

    function showMoreItems() {
        setShownItemsCount(Math.min(shownItemsCount + ITEMS_LIMIT, galleryItems.length));
    }

    return (
        <div className="CatalogContent">
            <CatalogItemsGallery
                items={galleryItems.slice(0, shownItemsCount)}
            />
            <CatalogMore
                buttonClickHandler={showMoreItems}
            />
        </div>
    );
}
