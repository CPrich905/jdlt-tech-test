import React from 'react'
import axios from 'axios'
import ProductForm from './ProductForm'

class NewProduct extends React.Component {
  constructor() {
    super()
    this.state = { data: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: {name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('api/products', this.state.data)
      .then(() => this.props.history.push('/products'))
      .catch(err => console.log(err.response))
  }

  render() {
    return(
      <section>
        <div>
          <ProductForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default NewProduct