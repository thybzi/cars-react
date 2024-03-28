import {useLoaderData} from 'react-router-dom';
import {Menu} from '../components/Menu/Menu';
import {MainContent} from '../components/MainContent/MainContent';

export function ItemPage() {
    const {
        image,
        title,
        description,
    } = useLoaderData();

    return (
        <>
            <Menu/>
            <MainContent>
                <img
                    src={image}
                    alt={`${title} photo`}
                />
                <h1>{title}</h1>
                <div>{description}</div>
            </MainContent>
        </>
    );
}
