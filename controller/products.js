const productsData = require('../model/products.json')

function getProducts(type) {
    return productsData
}

module.exports = {
    getProducts
}