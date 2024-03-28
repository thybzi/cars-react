import {RouterProvider, createHashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {processItemData} from '../helpers/processItemData';
import {CatalogItemContext} from '../components/CatalogItem/CatalogItemContext';
import {HomePage} from '../pages/HomePage';
import {CatalogPage} from '../pages/CatalogPage';
import {ItemPage} from '../pages/ItemPage';

export function App() {
    const apiUrl = 'https://660247539d7276a75552f2f5.mockapi.io/cars/list';

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
            element: (
                <CatalogItemContext.Provider value={{
                    hasFavoriteIcon: false,
                }}>
                    <CatalogPage/>
                </CatalogItemContext.Provider>
            ),
            loader: async () => {
                const {favorites} = store.getState();
                const res = await fetch(apiUrl);
                const data = await res.json();
                return data.filter(({id}) => (favorites.has(id))).map(processItemData);
            },
        },
    ]);

    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
}
