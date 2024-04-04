import {processItemData} from './processItemData';

const defaultSourceData = {
    title: 'Aston Martin CTS',
    description: 'Boston\'s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',
    category: 'Cargo Van',
    isFavorite: false,
    image: 'https://loremflickr.com/640/480/transport',
    volume: 40,
    gear: 'Electric',
    capacity: 56,
    price: '640.00',
    oldPrice: '194.00',
    id: '352',
};

const defaultProcessedData = processItemData(defaultSourceData);

test('rewrites image height', () => {
    expect(defaultProcessedData.image).not.toContain('/640/480/');
    expect(defaultProcessedData.image).toContain('/640/300/');
});

test('rewrites image category', () => {
    expect(defaultProcessedData.image).not.toContain('/transport');
    expect(defaultProcessedData.image).toContain('/cars');
});
test('appends id param to image url', () => {
    expect(defaultProcessedData.image.endsWith(`?${defaultProcessedData.id}`)).toEqual(true);
});

test('discards old price if lower than price', () => {
    expect(defaultProcessedData.oldPrice).toBeNull();
});

test('keeps old price if higher than price', () => {
    const sourceData = {
        ...defaultSourceData,
        oldPrice: '641.00',
    };
    const processedData = processItemData(sourceData);
    expect(processedData.oldPrice).toEqual('641.00');
});

test('discards old price if equal to price', () => {
    const sourceData = {
        ...defaultSourceData,
        oldPrice: '640.00',
    };
    const processedData = processItemData(sourceData);
    expect(processedData.oldPrice).toBeNull();
});
