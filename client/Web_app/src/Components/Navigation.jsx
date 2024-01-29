import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navigation = () => {
  
const navstyle=({isActive})=>{
 return{
  fontWeight: isActive? 'bold' : 'normal'
 }
}

  return (
    <>
    <nav className='flex justify-evenly py-10 '  >
        <NavLink to='/' style={navstyle}>Home</NavLink>
        <NavLink to='about' style={navstyle}>About</NavLink>
        <NavLink to='order' style={navstyle}>Order</NavLink>
        <NavLink to='products' style={navstyle}>Products</NavLink>
    </nav>
    
    </>
  )
}

export default Navigation