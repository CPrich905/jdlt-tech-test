import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/common/Navbar'
import Home from './components/common/Home'
// import Selector from './components/Products/Selector'
import ProductIndex from './components/Products/ProductsIndex'
import NewProduct from './components/Products/NewProduct'

// Home/Landing page should show all products & filter options.
// Navbar holds route to creating new product/indexing all products

const App = () => {
  return(
    <BrowserRouter>
      <main className="app-main"> 
        <NavBar />

        <Switch>
          <Route path="/products" component={ProductIndex} />
          <Route path="/new" component={NewProduct}/>
          <Route exact path="/" component={Home} />
        </Switch>  
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)