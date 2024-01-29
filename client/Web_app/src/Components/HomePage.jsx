import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const HomePage = () => {  
  const navigate=useNavigate()
  return (
    <>
   Home
   <div>Make order by clicking the button</div>
    <button onClick={()=>navigate('success')}  className='border-2 p-2'>order</button>
    </>
    // <div className='text-center'>HomePage</div>
  )
}

export default HomePage