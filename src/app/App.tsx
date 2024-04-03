import {RouterProvider, createHashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {fetchCatalogData} from '../store/slices/catalog';
import {HomePage} from '../pages/HomePage';
import {CatalogPage} from '../pages/CatalogPage';
import {ItemPage} from '../pages/ItemPage';

export function App() {
    function startCatalogLoading() {
        const {catalog: {status}} = store.getState();

        if (status === 'idle') {
            void store.dispatch(fetchCatalogData());
        }
    }

    const router = createHashRouter([
        {
            path: '/',
            element: <HomePage/>,
        },
        {
            path: '/catalog',
            element: <CatalogPage/>,
            loader: () => {
                startCatalogLoading();
                return null;
            },
        },
        {
            path: '/catalog/:itemId',
            element: <ItemPage/>,
            loader: ({params}) => {
                startCatalogLoading();
                return params.itemId as string;
            },
        },
        {
            path: '/favorites',
            element: <CatalogPage/>,
            loader: () => {
                startCatalogLoading();
                const {favorites} = store.getState();
                return favorites;
            },
        },
    ]);

    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
}
