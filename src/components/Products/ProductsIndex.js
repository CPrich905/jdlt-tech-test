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
  }

  //GET request to API. Set data in state & map over each product to produce display of products.
  //click on product to set a new class name. Style so selected product is bigger & central to page.
  render() {
    if(!this.state.products) return null
    return(
      <section className="section">
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