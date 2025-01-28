import React from 'react'
import { useSelector } from 'react-redux'
import './carttotal.css'
import { Link } from 'react-router-dom'
function Carttotal() {
  const {cartproducts,totalprice}=useSelector((state)=>state.cart)
  return (
    <>
  <div className='w-[20%] border-2 h-[215px] place-content-center space-y-3 mx-auto border-black p-2  rounded-3xl  bg-white sm:w-[80%]'>
      <div className='carttotal '>Total Items:<span>{cartproducts.length}</span></div>
      <div className='carttotal'>Subtotal:<span>{totalprice}</span></div>
      <div className='carttotal'>Total:<span>${totalprice}</span></div>
    <div className='buttoncontain'>
     
        <button className='buttons bg-blue-950 '>Paynow${totalprice}</button>
        <Link to="/shop">
        <button className='buttons bg-blue-950 '>continue shop</button>
        </Link>
    </div>
  </div>
    </>
  )
}

export default Carttotal
