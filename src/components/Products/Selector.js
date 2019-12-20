import React from 'react'
import axios from 'axios'

// possibly discard this component

class Selector extends React.Component {
  constructor() {
    super()
  }

  // getData() {
  //   axios.get('api/products')
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }

  // componentDidMount() {
  //   this.getData()
  // }

  render() {
    return(
      <section className='supplierSelector-section'>
        <div className="selector-div">
          <p>Selectors go here</p>
        </div>
      </section>
    )
  }
}

export default Selector