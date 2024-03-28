import {Link} from 'react-router-dom';
import {MainContent} from '../../components/MainContent/MainContent';

export function HomePage() {
    return (
        <MainContent>
            <Link to="/catalog">Go to catalog</Link>
        </MainContent>
    );
}
