const productsData = require("../products.json");

//productsData is not defined

function getProducts() {
  return productsData
}

module.exports = {
  getProducts: getProducts
}

//1. criar a pasta model
//2. criar um arquivo dentro da pasta model chamado products.js
//3. copiar o código do professor