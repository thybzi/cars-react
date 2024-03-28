import {Link} from 'react-router-dom';
import {Menu} from '../components/Menu/Menu';
import {MainContent} from '../components/MainContent/MainContent';

export function HomePage() {
    return (
        <>
            <Menu/>
            <MainContent>
                <Link to="/catalog">Go to catalog</Link>
            </MainContent>
        </>
    );
}
