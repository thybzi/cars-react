

import {cleanup, render} from '@testing-library/react';
import {Navigate, RouterProvider, createMemoryRouter} from 'react-router-dom';
import {ItemPage} from './ItemPage';
import {ErrorBoundary} from '../components/ErrorBoundary/ErrorBoundary';

jest.mock('../api/loadCarItem');
// eslint-disable-next-line import/first
import {loadCarItem} from '../api/loadCarItem';


afterEach(cleanup);

it('renders with data', () => {
    const router = createMemoryRouter([
        {
            path: '/',
            element: <ItemPage/>,
            // eslint-disable-next-line
            loader: async () => (loadCarItem('352')),
        },
    ]);

    const {queryByText} = render(
        <RouterProvider router={router}/>,
    );
    expect(queryByText('Aston Martin CTS')).toBeTruthy();
});

it('renders with error', () => {
    const router = createMemoryRouter([
        {
            path: '/',
            element: <ItemPage/>,
            // eslint-disable-next-line
            loader: async () => (loadCarItem('Some-Wrong-ID')),
            errorElement: <ErrorBoundary/>,
        },
    ]);

    const {queryByText} = render(
        <RouterProvider router={router}/>,
    );
    expect(queryByText('No item with id = Some-Wrong-ID')).toBeTruthy();
});
