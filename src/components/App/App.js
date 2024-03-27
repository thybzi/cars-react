import {useEffect, useState} from 'react';
import {CatalogContent} from '../CatalogContent/CatalogContent';
import './App.scss';

export function App() {
    const [galleryItems, setGalleryItems] = useState([]);

    const apiUrl = 'https://660247539d7276a75552f2f5.mockapi.io/cars/list';

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => (res.json()))
            .then((data) => {
                setGalleryItems(data);
            });
    }, [apiUrl]);

    return (
        <CatalogContent galleryItems={galleryItems}/>
    );
}
