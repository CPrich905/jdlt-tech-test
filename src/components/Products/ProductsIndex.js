import React from 'react'
import axios from 'axios'

import SearchBars from '../common/SearchBars'

class ProductIndex extends React.Component{
  constructor() {
    super()
    this.state = { products: null, uSuppliers: [], uProducts: [], display: null }

    this.filterProducts = this.filterProducts.bind(this)
    this.filterSuppliers = this.filterSuppliers.bind(this)
    this.productsSetDisplay = this.productsSetDisplay.bind(this)
    this.supplierSetDisplay = this.supplierSetDisplay.bind(this)
  }

  getData() {
    axios.get('api/products')
    .then(res => this.setState({ products: res.data }))
    .catch(err => console.log(err))
  }
  
  filterSuppliers() {
    console.log('supplier filter fires')
    const products = this.state.products
    let fltdSuppliers = products.filter((set => products => !set.has(products.supplier) && set.add(products.supplier))(new Set))
    console.log('fltdSuppliers', fltdSuppliers)
    this.setState({ uSuppliers: fltdSuppliers })
    // console.log('filtered suppliers ', fltdSuppliers)
  }

  // filter needs to take the input field from the dropdown and filter through the products by name. Repeat for filter by supplier or have toggle for supplier/product
  filterProducts() {
    console.log('filter fires')
    const products = this.state.products
    let fltdProducts = products.filter((set => products => !set.has(products.product) && set.add(products.product))(new Set))
    console.log('fltdproducts', fltdProducts)
    this.setState({ uProducts: fltdProducts })
  }

  componentDidMount() {
    this.getData()
  }

  productsSetDisplay() {
    console.log('pSD fires')
  }

  supplierSetDisplay() {
    console.log('sSD fires')
  }

  // this.state.display should contain an array of products that are rendered on the browser page.
  // display should be modified by the filter functions
  // if no filter has been set, display should default to the full api return
  // if(!display) { display = products }

  // filter by supplier/product must check products and offer a drop down menu of suppliers/products.
  // Selecting a supplier/product must check for products with matching product/supplier then setState({ display: result })
  render() {
    if(!this.state.products) return null

    const products = this.state.products

    console.log('index fires, products are', products)
    return(
      <section className="section">
        <SearchBars
          products={products}
          uProducts={this.state.uProducts}
          uSuppliers={this.state.uSuppliers}
          filterProducts={this.filterProducts}
          filterSuppliers={this.filterSuppliers}
          productsSetDisplay={this.productsSetDisplay}
          supplierSetDisplay={this.supplierSetDisplay}
          display={this.state.display}
          >
        
        </SearchBars>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Unique ID</th>
                <th>Product</th>
                <th>Supplier</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.product}</td>
                  <td>{product.supplier}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
              <tr>
                
              </tr>
            </tbody>
          </table>
          
        </div>
      </section>
    )
  }
}

export default ProductIndex