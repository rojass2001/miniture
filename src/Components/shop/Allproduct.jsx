import React, { useEffect } from 'react'
import { allproducts } from '../../Mainarray/Allproducts'
import { useDispatch, useSelector } from 'react-redux'
import { FaCartShopping, FaStar } from 'react-icons/fa6'
import { setproducts,productdetailcontain } from '../../redux/Productslice'
import {  productpopup } from '../../redux/Popup'
import { addtocart } from '../../redux/Cartslice'
import Searchbar from '../Searchbar'
 const hover="transform transition-all duration-300 hover:scale-105"
function Allproduct() {
     const {allproduct}=useSelector((state)=>state.product)
     const productfill=()=>{
      dispatch(setproducts(allproducts))
     }
    const singleproduct=(a)=>{
      dispatch((productpopup()))
      dispatch((productdetailcontain(a)))
    }
     const dispatch=useDispatch()
      useEffect(()=>{
        productfill()
},[])
  return (
<>
  <div className=' relative   ' >
    <Searchbar/>
    <div className='w-full h-[500px] overflow-auto  mt-12 px-12 mb-4 grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-3 md:px-3 sm:px-0  md:h-screen' >
      {
        allproduct?.map((a)=>(
     <div  onClick={()=>singleproduct(a)}className={`h-[250px] group rounded-3xl relative place-items-center
      text-center bg-white shadow-md shadow-gray-300 ${hover} `}key={a.id}>
          <img className='  rounded-t-3xl  w-full h-[50%]' src={a.image}/>
          <p className='font-bold'>{a.name}</p>
          <p className='font-bold'>${a.price}</p>
          <div className='flex items-center'><FaStar/>{a.rate}</div>
          <div onClick={()=>dispatch(addtocart(a))} className='absolute bottom-2 rounded-full p-2 
           bg-black text-white right-1 hidden group-hover:block sm:block md:block'><FaCartShopping />
          </div>
      </div>
        ))}
    </div>
  </div>
</>
  )
}

export default Allproduct
