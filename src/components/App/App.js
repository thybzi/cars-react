import React, {useEffect, useState} from 'react';
import {CatalogContent} from '../CatalogContent/CatalogContent';
import './App.css';

export function App() {
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        fetch('https://demo5394722.mockable.io/cars')
            .then((res) => (res.json()))
            .then((data) => {
                setGalleryItems(data);
            });
    });

    return (
        <CatalogContent galleryItems={galleryItems}/>
    );
}
