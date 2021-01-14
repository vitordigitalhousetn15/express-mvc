const model = require("../model/products");

function getProducts(req, res, next) {
  const productsData = model.getProducts();

  res.render("products", {
    title: "Products",
    data: {
      products: productsData,
    },
  });
}

module.exports = {
  getProducts,
};
