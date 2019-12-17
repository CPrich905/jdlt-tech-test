const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  supplier: { type: String, require: true },
  product: { type: String, require: true },
  price: { type: Number, require: true }
})

module.exports = mongoose.model('Product', productSchema)