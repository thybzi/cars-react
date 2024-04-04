import type {CarItemData} from '../api/types';

export function processItemData({
    id,
    image,
    price,
    oldPrice,
    ...props
}: CarItemData): CarItemData {
    const imageValue = `${image}?${id}`
        .replace('/480/', '/300/')
        .replace('/transport', '/cars');

    const priceValue = parseFloat(price);
    let oldPriceValue: number | null = parseFloat(oldPrice as string);

    if (oldPriceValue < priceValue) {
        oldPriceValue = null;
    }

    return {
        id,
        image: imageValue,
        price: priceValue.toFixed(2),
        oldPrice: (typeof oldPriceValue === 'number')
            ? oldPriceValue.toFixed(2)
            : null,
        ...props,
    };
}
