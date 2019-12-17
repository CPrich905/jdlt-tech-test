const Product = require('../models/product')

function indexAllProducts(req, res) {
  Product
    .find(req.query)
    .then(products => {
      if(!products) {
        return res.sendStatus(404)
      } else return res.status(200).json(products)})
    .catch()
}

module.exports = {
  index: indexAllProducts
}