import React from 'react'

// add in image/description?
{/* <p className="error">{errors.name && <small>{errors.name}</small>}</p> */}
const ProductForm = ({ data, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="field">
      <label className="label">Product</label>
      <div>
        <input
          className="input"
          name="product"
          placeholder="Product"
          onChange={handleChange}
          value={data.product || ''}
        />
      </div>

    </div>
    <div className="field">
      <label className="label">Supplier</label>
      <div>
        <input
          className="input"
          name="supplier"
          placeholder="Supplier"
          onChange={handleChange}
          value={data.supplier || ''}
        />
      </div>

    </div>
    <div className="field">
      <label className="label">Price</label>
      <div>
        <input
          className="input"
          name="price"
          type="Number"
          placeholder="Price"
          onChange={handleChange}
          value={data.price || ''}
        />
      </div>

    </div>

    <button type="submit" className="button"></button>
  </form>
)

export default ProductForm