import {useLoaderData} from 'react-router-dom';
import {MainContent} from '../components/MainContent/MainContent';

export function ItemPage() {
    const {
        image,
        title,
        description,
    } = useLoaderData();

    return (
        <MainContent>
            <img src={image} alt=""/>
            <h1>{title}</h1>
            <div>{description}</div>
        </MainContent>
    );
}
