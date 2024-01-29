import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import Navigation from './Components/Navigation'
import Success from './Components/Success'
import Order from './Components/Order'
import PageNotFound from './Components/PageNotFound'
import Products from './Components/Products'
import NewProducts from './Components/NewProducts'
import Treanding from './Components/Treanding'
const App = () => {
  return (
    <>
    <Navigation/>
    <Routes >
      <Route path='/' element={<HomePage/>} />
      <Route path='about' element={<AboutPage/>}/>
      <Route path='success' element={<Success/>}/>
      <Route path='order' element={<Order/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='products' element={<Products/>}>
        
          <Route path='trending' element={<Treanding/>}/>

          <Route path='newproducts' element={<NewProducts/>}/>

      </Route>
    </Routes>
    
    
    </>
  )
}

export default App