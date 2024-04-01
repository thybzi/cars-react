import type {CatalogItemProps} from '../components/CatalogItem/CatalogItem';

export function processItemData({
    id,
    image,
    price,
    oldPrice,
    ...props
}: CatalogItemProps): CatalogItemProps {
    const imageValue = `${image}?${id}`
        .replace('/480/', '/300/')
        .replace('/transport', '/cars');

    const priceValue = parseFloat(price);
    let oldPriceValue = parseFloat(oldPrice);

    if (oldPriceValue < priceValue) {
        oldPriceValue = null;
    }

    return {
        id,
        image: imageValue,
        price: priceValue.toFixed(2),
        oldPrice: oldPriceValue && oldPriceValue.toFixed(2),
        ...props,
    };
}
