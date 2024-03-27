import {CatalogItem} from '../CatalogItem/CatalogItem';
import classes from './CatalogItemsGallery.module.scss';

export function CatalogItemsGallery({
    items = [],
    noItemsFavoriteIcon = false,
}) {
    return (
        <div className={classes.CatalogItemsGallery}>
            {items.map((itemData, i) => (
                <CatalogItem
                    key={i}
                    noFavoriteIcon={noItemsFavoriteIcon}
                    {...itemData}
                />
            ))}
        </div>
    );
}
