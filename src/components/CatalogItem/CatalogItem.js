import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import {toggleItemFavorite} from '../../store/actions';
import {CatalogItemContext} from './CatalogItemContext';
import {Icon} from '../Icon/Icon';
import {Button} from '../Button/Button';
import classes from './CatalogItem.module.scss';

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
    const {hasFavoriteIcon} = useContext(CatalogItemContext);
    const isFavorite = useSelector((state) => (state.favorites.includes(id)));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const favoriteIconName = isFavorite ? 'heart' : 'heartOutline';

    function Details({
        iconName,
        text,
    }) {
        return (
            <div className={classes.CatalogItem__detailsItem}>
                <Icon
                    name={iconName}
                    auxClass={classes.CatalogItem__detailsItemIcon}
                />
                <div className={classes.CatalogItem__detailsItemCaption}>{text}</div>
            </div>
        );
    }

    return (
        <div className={clsx([
            classes.CatalogItem,
            !hasFavoriteIcon && classes.CatalogItem_noFavoriteIcon,
        ])}>
            <div className={classes.CatalogItem__titleBlock}>
                <div className={classes.CatalogItem__title}>{title}</div>
                <div className={classes.CatalogItem__category}>{category}</div>
            </div>
            {hasFavoriteIcon && (
                <div
                    className={classes.CatalogItem__favorite}
                    onClick={() => {
                        dispatch(toggleItemFavorite(id));
                    }}
                >
                    <Icon
                        name={favoriteIconName}
                        auxClass={classes.CatalogItem__favoriteIcon}
                    />
                </div>
            )}
            <div className={classes.CatalogItem__imageBlock}>
                <img
                    className={classes.CatalogItem__image}
                    src={image}
                />
            </div>
            <div className={classes.CatalogItem__details}>
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
            <div className={classes.CatalogItem__rentBlock}>
                <div className={classes.CatalogItem__priceBlock}>
                    <div className={classes.CatalogItem__priceRow}>
                        <span className={classes.CatalogItem__price}>${price}/</span>
                        <span className={classes.CatalogItem__subject}>day</span>
                    </div>
                    {oldPrice && (
                        <div className={classes.CatalogItem__oldPrice}>${oldPrice}</div>
                    )}
                </div>
                <Button
                    text='Rent Now'
                    auxClass={classes.CatalogItem__rentButton}
                    onClick={() => {
                        navigate(`/catalog/${id}`);
                    }}
                />
            </div>
        </div>
    );
}
