import React from 'react'
import axios from 'axios'
import ProductForm from './ProductForm'

class EditProduct extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`api/products/${this.props.match.params.id}`)
  }

  handleChange({ target: {name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitting', this.state.data)
  }

  render() {
    return(
      <section className="section">
        <div className="main">
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

export default EditProduct