const carsData = require('./carsData.json');

const loadCarsList = () => (new Promise((resolve) => {
    resolve(carsData);
}));

module.exports = {
    loadCarsList,
};
