export function processItemData({
    id,
    image,
    price,
    oldPrice,
    ...props
}) {
    let imageValue = image;

    if (imageValue.startsWith('http')) {
        imageValue = imageValue.replace('/480/', '/300/');
        imageValue = imageValue.replace('/transport', '/car');
        imageValue = `${imageValue}?${id}`;
    } else {
        imageValue = `https://ik.imagekit.io/thybzi/${image}`;
    }

    const priceValue = parseFloat(price);
    let oldPriceValue = parseFloat(oldPrice);

    if (oldPriceValue <= priceValue) {
        oldPriceValue = null;
    }

    return {
        id,
        image: imageValue,
        price: priceValue,
        oldPrice: oldPriceValue,
        ...props,
    };
}
