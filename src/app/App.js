import {useState} from 'react';
import {RouterProvider, createHashRouter} from 'react-router-dom';
import {AppContext} from './AppContext';
import {CatalogItemContext} from '../components/CatalogItem/CatalogItemContext';
import {favoritesStorage} from '../storage/favoritesStorage';
import {HomePage} from '../pages/HomePage';
import {CatalogPage} from '../pages/CatalogPage';
import {ItemPage} from '../pages/ItemPage';
import {processItemData} from '../helpers/processItemData';
import {API_URL} from '../shared/settings';

export function App() {
    const [favorites, setFavorites] = useState(favoritesStorage.getValue());

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
        favoritesStorage.setValue(newFavorites);
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
                const res = await fetch(API_URL);
                const data = await res.json();
                return data.map(processItemData);
            },
        },
        {
            path: '/catalog/:itemId',
            element: <ItemPage/>,
            loader: async ({params}) => {
                const res = await fetch(`${API_URL}/${params.itemId}`);
                const data = await res.json();
                return processItemData(data);
            },
        },
        {
            path: '/favorites',
            element: (
                <CatalogItemContext.Provider value={{
                    hasFavoriteIcon: false,
                }}>
                    <CatalogPage/>
                </CatalogItemContext.Provider>
            ),
            loader: async () => {
                const res = await fetch(API_URL);
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
