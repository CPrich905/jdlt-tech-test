import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import NavBar from './components/Navbar'
import Home from './components/Home'
import SupplierSelector from './components/Products/Selector'
import ProductIndex from './components/Products/ProductsIndex'

const App = () => {
  return(
    <BrowserRouter>
      <main className="app-main"> 
        <NavBar />  
        <Home />
        <SupplierSelector />
        <ProductIndex />
      </main>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)