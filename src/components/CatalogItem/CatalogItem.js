import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AppContext} from '../../app/AppContext';
import {Icon} from '../Icon/Icon';
import {Button} from '../Button/Button';
import './CatalogItem.scss';

export function CatalogItem({
    id,
    title,
    category,
    image,
    volume,
    gear,
    capacity,
    price,
    oldPrice,
}) {
    const {isItemFavorite, toggleItemFavorite} = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(isItemFavorite(id));
    const navigate = useNavigate();

    const favoriteIconElemClass = 'CatalogItem__favoriteIcon';
    const favoriteIconName = isFavorite ? 'heart' : 'heartOutline';

    function Details({
        iconName,
        text,
    }) {
        return (
            <div className="CatalogItem__detailsItem">
                <Icon
                    name={iconName}
                    auxClass='CatalogItem__detailsItemIcon'
                />
                <div className="CatalogItem__detailsItemCaption">{text}</div>
            </div>
        );
    }

    return (
        <div className="CatalogItem">
            <div className="CatalogItem__titleBlock">
                <div className="CatalogItem__title">{title}</div>
                <div className="CatalogItem__category">{category}</div>
            </div>
            <div
                className="CatalogItem__favorite"
                onClick={() => {
                    setIsFavorite(!isFavorite);
                    toggleItemFavorite(id);
                }}
            >
                <Icon
                    name={favoriteIconName}
                    auxClass={favoriteIconElemClass}
                />
            </div>
            <div className="CatalogItem__imageBlock">
                <img
                    className="CatalogItem__image"
                    src={image}
                />
            </div>
            <div className="CatalogItem__details">
                <Details
                    iconName='fuel'
                    text={`${volume}L`}
                />
                <Details
                    iconName='steer'
                    text={gear}
                />
                <Details
                    iconName='people'
                    text={`${capacity} People`}
                />
            </div>
            <div className="CatalogItem__rentBlock">
                <div className="CatalogItem__priceBlock">
                    <div className="CatalogItem__priceRow">
                        <span className="CatalogItem__price">${price.toFixed(2)}/</span>
                        <span className="CatalogItem__subject">day</span>
                    </div>
                    {oldPrice && <div className="CatalogItem__oldPrice">${oldPrice.toFixed(2)}</div>}
                </div>
                <Button
                    text='Rent Now'
                    auxClass='CatalogItem__rentButton'
                    onClick={() => {
                        navigate(`/catalog/${id}`);
                    }}
                />
            </div>
        </div>
    );
}
