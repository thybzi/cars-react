import React from 'react';
import './CatalogContent.css';
import {CatalogItemsGallery} from '../CatalogItemsGallery/CatalogItemsGallery';
import {CatalogMore} from '../CatalogMore/CatalogMore';

export function CatalogContent({
    galleryItems = [],
}) {
    return (
        <div className="CatalogContent">
            <CatalogItemsGallery
                items={galleryItems}
            />
            <CatalogMore/>
        </div>
    );
}
