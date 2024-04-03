import {Outlet, useNavigation} from 'react-router-dom';
import {Loading} from '../components/Loading/Loading';
import {Header} from '../components/Header/Header';
import {MainContent} from '../components/MainContent/MainContent';

export function Layout() {
    const navigation = useNavigation();
    const isLoading = (navigation.state === 'loading');

    return (
        <>
            <Header/>
            <MainContent>
                {isLoading ? <Loading/> : <Outlet/>}
            </MainContent>
        </>
    );
}
