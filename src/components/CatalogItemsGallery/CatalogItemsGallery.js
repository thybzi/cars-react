import {CatalogItem} from '../CatalogItem/CatalogItem';
import classes from './CatalogItemsGallery.module.scss';

export function CatalogItemsGallery({
    items = [],
}) {
    return (
        <div className={classes.CatalogItemsGallery}>
            {items.map((itemData, i) => (
                <CatalogItem
                    key={i}
                    {...itemData}
                />
            ))}
        </div>
    );
}
