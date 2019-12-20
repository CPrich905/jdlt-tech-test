import React from 'react'
import axios from 'axios'

import ProductCard from './ProductCard'

class ProductIndex extends React.Component{
  constructor() {
    super()
    this.state = { products: null }
  }

  componentDidMount() {
    axios.get('api/products')
    .then(res => this.setState({ products: res.data }))
    .catch(err => console.log(err))
    // this.getData()
  }

  // filter needs to take the input field from the dropdown and filter through the products by name. Repeat for filter by supplier
  filterProducts() {
    console.log('filter fires')
  }

  //GET request to API. Set data in state & map over each product to produce display of products.
  //click on product to set a new class name. Style so selected product is bigger & central to page.
  // add filter functions
  render() {
    if(!this.state.products) return null
    const products = this.state.products
    console.log('index fires, products are', products)
    return(
      <section className="section">
        <div className="container dropdown">
          <div id="dropdown-menu dropdown-products">
            <input type="text" placeholder="filter products" onKeyUp={this.filterProducts()}>
              
            </input>
          </div>
        </div>
        <div className="container">
          {this.state.products.map(product => (
            <ProductCard 
              key={product._id}
              {...product}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default ProductIndex