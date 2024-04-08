const carsData = require('./carsData.json');

const loadCarItem = (itemId) => (new Promise((resolve, reject) => {
    const itemData = carsData.find(({id}) => (id === itemId));

    if (itemData) {
        resolve(itemData);
    } else {
        reject(new Error(`No item with id = ${itemId}`));
    }
}));

module.exports = {
    loadCarItem,
};
