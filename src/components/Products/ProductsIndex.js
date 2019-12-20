import React from 'react'
import axios from 'axios'

import ProductCard from './ProductCard'

class ProductIndex extends React.Component{
  constructor() {
    super()
    this.state = { products: null }
  }

  getData() {
    
  }

  componentDidMount() {
    console.log('index cdm fires')
    axios.get('api/products')
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if(!this.state.products) return null
    console.log('index renders, t.s.products is', this.state.products)
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