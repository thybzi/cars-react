import {useLoaderData} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Menu} from '../components/Menu/Menu';
import {MainContent} from '../components/MainContent/MainContent';

export function ItemPage() {
    const {
        id,
        image,
        title,
        description,
    } = useLoaderData();

    const isFavorite = useSelector((state) => (state.favorites.includes(id)));

    return (
        <>
            <Menu/>
            <MainContent>
                <img
                    src={image}
                    alt={`${title} photo`}
                />
                <h1>{title} {isFavorite && <small>(favorite!)</small>}</h1>
                <div>{description}</div>
            </MainContent>
        </>
    );
}
