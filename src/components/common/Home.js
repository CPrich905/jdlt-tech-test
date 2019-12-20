import React from 'react'

class Home extends React.Component {
  constructor(){
    super()
  }

  render() {
    console.log('homepage renders')

    return(
      <section className="homepage-section">
        <div className="homepage-div">
          <p>Homepage/Header</p>
          <p>To view our products click the "Show all products Tab below" or "Index" in the NavBar</p>
        </div>
      </section>
    )
  }
}

export default Home