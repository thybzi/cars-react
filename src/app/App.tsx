import {RouterProvider, createHashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {loadCarsList} from '../api/loadCarsList';
import {loadCarItem} from '../api/loadCarItem';
import {HomePage} from '../pages/HomePage';
import {CatalogPage} from '../pages/CatalogPage';
import {ItemPage} from '../pages/ItemPage';

export function App() {
    const router = createHashRouter([
        {
            path: '/',
            element: <HomePage/>,
        },
        {
            path: '/catalog',
            element: <CatalogPage/>,
            loader: loadCarsList,
        },
        {
            path: '/catalog/:itemId',
            element: <ItemPage/>,
            loader: async ({params}) => {
                const data = await loadCarItem(params.itemId as string);
                return data;
            },
        },
        {
            path: '/favorites',
            element: <CatalogPage/>,
            loader: async () => {
                const {favorites} = store.getState();
                const data = await loadCarsList();
                return data.filter(({id}) => (favorites.includes(id)));
            },
        },
    ]);

    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
}
