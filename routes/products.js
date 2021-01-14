const express = require('express');
const controller = require('../controller/products')

var router = express.Router();

router.get('/', function(req, res, next) {
  const productsData = controller.getProducts()  

  res.render('products', { title: 'Products', data: {
    products: productsData
  } });
});

module.exports = router;
