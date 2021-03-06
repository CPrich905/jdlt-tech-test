import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/common/Navbar'
import ProductIndex from './components/Products/ProductsIndex'
import NewProduct from './components/Products/NewProduct'
import EditProduct from './components/Products/EditProduct'

// Home/Landing page should show all products & filter options.
// Navbar holds route to creating new product/indexing all products

const App = () => {
  return(
    <BrowserRouter>
      <main className="app-main"> 
        <NavBar />

        <Switch>
          <Route path="/new" component={NewProduct}/>
          <Route path="/products/:id/edit" component={EditProduct}/>
          <Route exact path="/" component={ProductIndex} />
        </Switch>  
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)