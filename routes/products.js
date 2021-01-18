var express = require('express');
const products = require("../products.json");

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('products', { title: 'produtos', products: products });
});

module.exports = router;
