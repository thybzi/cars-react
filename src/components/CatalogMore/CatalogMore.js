import {Button} from '../Button/Button';
import './CatalogMore.scss';

export function CatalogMore({
    buttonClickHandler,
}) {
    return (
        <div className="CatalogMore">
            <Button
                auxClass='CatalogMore__button'
                text='Show more cars'
                onClick={buttonClickHandler}
            />
            <div className="CatalogMore__caption">120 Cars</div>
        </div>
    );
}
