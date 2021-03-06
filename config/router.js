const router = require('express').Router()
const products = require('../controllers/products')

router.route('/products')
  .get(products.index)
  .post(products.create)

router.route('/products/:id')
  .get(products.find)
  .delete(products.delete)
  .put(products.edit)

module.exports = router