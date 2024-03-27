import {RouterProvider, createHashRouter} from 'react-router-dom';
import {HomePage} from '../pages/HomePage';
import {CatalogPage} from '../pages/CatalogPage';
import {ItemPage} from '../pages/ItemPage';
import {processItemData} from '../helpers/processItemData';
import {API_URL} from '../shared/settings';

export function App() {
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
    ]);

    return (
        <RouterProvider router={router}/>
    );
}
