import {Button} from '../Button/Button';
import classes from './CatalogMore.module.scss';

export function CatalogMore({
    buttonOnclick,
    galleryItemsCount,
}) {
    return (
        <div className={classes.CatalogMore}>
            <Button
                auxClass='CatalogMore__button'
                text='Show more cars'
                onClick={buttonOnclick}
            />
            <div className={classes.CatalogMore__caption}>
                {galleryItemsCount} Cars
            </div>
        </div>
    );
}
