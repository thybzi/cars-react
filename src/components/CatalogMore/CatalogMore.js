import {Button} from '../Button/Button';
import './CatalogMore.scss';

export function CatalogMore({
    buttonOnclick,
    galleryItemsCount,
}) {
    return (
        <div className="CatalogMore">
            <Button
                auxClass='CatalogMore__button'
                text='Show more cars'
                onClick={buttonOnclick}
            />
            <div className="CatalogMore__caption">
                {galleryItemsCount} Cars
            </div>
        </div>
    );
}
