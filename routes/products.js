const express = require('express');
const controller = require('../controller/products')

var router = express.Router();

router.get('/', controller.getProducts);

module.exports = router;
