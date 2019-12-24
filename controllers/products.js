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

function createNewProduct(req, res) {
  Product
    .create(req.body)
    .then(products => res.status(201).json(products))
    .catch(err => res.json(err))
}

function findSingleProduct(req, res) {
  Product
    .findById(req.params.id)
    .then(product => res.status(200).json(product))
}

function editProduct(req, res, next) {
  Product
    .findById(req.params.id)
    .then(product => res.status(201).json(product))
    .catch(next)
}

function deleteProduct(req, res) {
  Product
    .findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(204))
}

module.exports = {
  index: indexAllProducts,
  create: createNewProduct,
  find: findSingleProduct,
  delete: deleteProduct,
  edit: editProduct
}