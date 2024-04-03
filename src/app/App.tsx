import {RouterProvider, createHashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {HomePage} from '../pages/HomePage';
import {CatalogPage} from '../pages/CatalogPage';
import {ItemPage} from '../pages/ItemPage';
import {fetchUser} from '../store/slices/user';
import {loadCarsList} from '../api/loadCarsList';
import {loadCarItem} from '../api/loadCarItem';
import {loginAction} from './loginAction';
import {Layout} from './Layout';
import {ErrorBoundary} from '../components/ErrorBoundary/ErrorBoundary';

export function App() {
    const router = createHashRouter([
        {
            path: '/',
            element: <Layout/>,
            loader: () => {
                void store.dispatch(fetchUser());
                return null;
            },
            children: [
                {
                    path: '/',
                    element: <HomePage/>,
                    action: loginAction,
                },
                {
                    path: '/catalog',
                    element: <CatalogPage/>,
                    loader: loadCarsList,
                    action: loginAction,
                    errorElement: <ErrorBoundary/>,
                },
                {
                    path: '/catalog/:itemId',
                    element: <ItemPage/>,
                    loader: async ({params}) => (loadCarItem(params.itemId as string)),
                    action: loginAction,
                    errorElement: <ErrorBoundary/>,
                },
                {
                    path: '/favorites',
                    element: <CatalogPage/>,
                    loader: async () => {
                        const {favorites} = store.getState();
                        const data = await loadCarsList();
                        return data.filter(({id}) => (favorites.includes(id)));
                    },
                    action: loginAction,
                    errorElement: <ErrorBoundary/>,
                },
            ],
        },
    ]);

    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
}
