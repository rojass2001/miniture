import React, { useState } from 'react'

function Price() {
  return (
    <>
    
    <div className='w-full h-screen px-5 place-content-center place-items-center '>
      <div className='w-[20%] bg-white place-content-center border-2 rounded-3xl border-black shadow-md shadow-gray-300 
      text-center h-[230px]  relative sm:w-full sm:h-[300px] md:w-[60%]'>
        <input className='mt-4 h-8 outline-none border-[1px] border-black' required placeholder="Enter Your Name"type="text"/><br/>
        <input className='mt-4 outline-none h-8 border-[1px] border-black'  placeholder="Your address with pincode" type="text"/><br/>
        <button className='w-[100px] h-10 mt-4 bg-blue-950 text-white '>pay$500</button>
      </div>
    </div>
    </>
  )
}

export default Price
