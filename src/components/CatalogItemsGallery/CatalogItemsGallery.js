import {CatalogItem} from '../CatalogItem/CatalogItem';
import './CatalogItemsGallery.scss';

export function CatalogItemsGallery({
    items = [],
}) {
    return (
        <div className="CatalogItemsGallery">
            {items.map((itemData, i) => (
                <CatalogItem
                    key={i}
                    {...itemData}
                />
            ))}
        </div>
    );
}
