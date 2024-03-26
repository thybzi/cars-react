import React from 'react';
import {Button} from '../Button/Button';
import './CatalogMore.css';

export function CatalogMore() {
    return (
        <div className="CatalogMore">
            <Button
                auxClass='CatalogMore__button'
                text='Show more cars'
            />
            <div className="CatalogMore__caption">120 Cars</div>
        </div>
    );
}
