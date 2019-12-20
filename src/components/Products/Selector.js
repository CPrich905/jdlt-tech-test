import React from 'react'
import axios from 'axios'

class SupplierSelector extends React.Component {
  constructor() {
    super()
    this.state = { supplier: [], products: [] }
  }

  getData() {
    axios.get('api/products')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    console.log('supplierSelector renders, product is ', this.state.products)
    return(
      <section className='supplierSelector-section'>
        <div className="selector-div">
          <p>Selectors go here</p>
        </div>
      </section>
    )
  }
}

export default SupplierSelector