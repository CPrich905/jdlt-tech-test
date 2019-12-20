import React from 'react'

class Home extends React.Component {
  constructor(){
    super()

    this.state = { products: [] }
  }

  render() {
    console.log('homepage renders')

    return(
      <section className="homepage-section">
        <div className="homepage-div">
          <p>Homepage/Header</p>
          <p>To use this product selector, choose your search parameters below. You can filter by supplier or product.</p>
        </div>
      </section>
    )
  }
}

export default Home