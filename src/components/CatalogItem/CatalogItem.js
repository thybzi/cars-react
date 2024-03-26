import {useState} from 'react';
import {Icon} from '../Icon/Icon';
import {Button} from '../Button/Button';
import './CatalogItem.css';

export function CatalogItem({
    title,
    category,
    image,
    volume,
    isFavorite: defaultIsFavorite,
    gear,
    capacity,
    price,
    oldPrice,
}) {
    const [isFavorite, setIsFavorite] = useState(defaultIsFavorite);

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
                    src={`https://ik.imagekit.io/thybzi/${image}`}
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
                        <span className="CatalogItem__price">${price}.00/</span>
                        <span className="CatalogItem__subject">day</span>
                    </div>
                    {oldPrice && <div className="CatalogItem__oldPrice">${oldPrice}.00</div>}
                </div>
                <Button
                    text='Rent Now'
                    auxClass='CatalogItem__rentButton'
                />
            </div>
        </div>
    );
}
