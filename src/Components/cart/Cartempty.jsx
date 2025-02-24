import React from 'react'
import { useSelector } from 'react-redux'

function Cartempty() {
   
  return (
    <>
     
      <div className='w-full text-center pt-10 justify-center text-5xl   h-screen'>
        <h1 className='font-bold text-black'>Your cart Is Empty</h1>
      </div>
    </>
  )
}

export default Cartempty
