import {useState} from 'react';
import {RouterProvider, createHashRouter} from 'react-router-dom';
import {processItemData} from '../helpers/processItemData';
import {AppContext} from './AppContext';
import {HomePage} from '../pages/HomePage';
import {CatalogPage} from '../pages/CatalogPage';
import {ItemPage} from '../pages/ItemPage';

export function App() {
    const apiUrl = 'https://660247539d7276a75552f2f5.mockapi.io/cars/list';
    const [favorites, setFavorites] = useState(new Set());

    function isItemFavorite(itemId) {
        return favorites.has(itemId);
    }

    function toggleItemFavorite(itemId) {
        const newFavorites = new Set(favorites);

        if (newFavorites.has(itemId)) {
            newFavorites.delete(itemId);
        } else {
            newFavorites.add(itemId);
        }

        setFavorites(newFavorites);
    }

    const router = createHashRouter([
        {
            path: '/',
            element: <HomePage/>,
        },
        {
            path: '/catalog',
            element: <CatalogPage/>,
            loader: async () => {
                const res = await fetch(apiUrl);
                const data = await res.json();
                return data.map(processItemData);
            },
        },
        {
            path: '/catalog/:itemId',
            element: <ItemPage/>,
            loader: async ({params}) => {
                const res = await fetch(`${apiUrl}/${params.itemId}`);
                const data = await res.json();
                return processItemData(data);
            },
        },
        {
            path: '/favorites',
            element: <CatalogPage/>,
            loader: async () => {
                const res = await fetch(apiUrl);
                const data = await res.json();
                return data.filter(({id}) => (isItemFavorite(id))).map(processItemData);
            },
        },
    ]);

    return (
        <AppContext.Provider value={{
            favorites,
            isItemFavorite,
            toggleItemFavorite,
        }}>
            <RouterProvider router={router}/>
        </AppContext.Provider>
    );
}
