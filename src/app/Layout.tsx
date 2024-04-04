import {Outlet, useNavigation} from 'react-router-dom';
import {Menu} from '../components/Menu/Menu';
import {MainContent} from '../components/MainContent/MainContent';
import {Loading} from '../components/Loading/Loading';

export function Layout() {
    const navigation = useNavigation();
    const isLoading = (navigation.state === 'loading');

    return (
        <>
            <Menu/>
            <MainContent>
                {isLoading ? <Loading/> : <Outlet/>}
            </MainContent>
        </>
    );
}
