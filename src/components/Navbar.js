import React from 'react'

class NavBar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <section className="navbar-section">
        <div className="navbar-div">
          <p>Show all products</p>
          <p>Create new product</p>

        </div>
      </section>
    )
  }
}

export default NavBar