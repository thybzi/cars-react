import {Outlet} from 'react-router-dom';
import {Menu} from '../components/Menu/Menu';
import {MainContent} from '../components/MainContent/MainContent';

export function Layout() {
    return (
        <>
            <Menu/>
            <MainContent>
                <Outlet/>
            </MainContent>
        </>
    );
}
