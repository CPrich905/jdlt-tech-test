import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ supplier, product, price, _id }) => {
  return (
    <div className="card-container">
      <Link to={`products/${_id}`}>
      <div className="product-card">
        <div className="product-name">{product}</div>
        <div className="product-supplier">{supplier}</div>
        <div className="product-price">{price}</div>
      </div>
      </Link>
    </div>
  )
}

export default ProductCard