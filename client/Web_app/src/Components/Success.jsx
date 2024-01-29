import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const navigator=useNavigate()
  return (
      <>
      <div>Success</div>
      <button className='border-2 p-3'
      onClick={()=>{navigator(-1)}}
      > Back</button>
      </>
    
  )
}

export default Success