import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <><nav>
    <NavLink to='trending' >Trending</NavLink>
    <NavLink to='newproducts' className='ml-6'>New products</NavLink>
    </nav>
    <Outlet/>
    </>
  )
}

export default Products