import React from 'react'
import { useSelector } from 'react-redux'

function Cartempty() {
   
  return (
    <>
     
      <div className='w-full h-[250px] text-5xl place-content-center place-items-center md:h-screen'>
        <h1 className='font-bold text-black'>Your cart Is Empty</h1>
      </div>
    </>
  )
}

export default Cartempty
