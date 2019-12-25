import React from 'react'

const SearchBars = ({ filterProducts, uProducts, filterSuppliers, productsSetDisplay, supplierSetDisplay, uSuppliers }) => {
  return(
    <section>
      <div className="container">
        <div className="product-dropdown dropdown-menu">
          <button onClick={filterProducts}>
            Filter by Product
          </button>
          <div className="product-dropdown-items dropdown-items">
            <input type="text" placeholder="Search products" id="products-search" onKeyUp={productsSetDisplay}></input>
            {uProducts.map(product => (
              <p key={product._id}
              >{product.product}</p>
            ))}
          </div>
        </div>
        <div>
          <button onClick={filterSuppliers}>
            Filter by Supplier
          </button>
          <div className="supplier-dropdown-items dropdown-items">
            <input type="text" placeholder="Search suppliers" id="suppliers-search" onKeyUp={supplierSetDisplay}></input>
            {uSuppliers.map(product => (
              <p key={product._id}
              >{product.supplier}</p>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default SearchBars