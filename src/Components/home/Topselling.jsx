import React, { useEffect } from 'react'
import topproduct from '../../Mainarray/Topselarray'
import { FaCartShopping, FaStar } from 'react-icons/fa6'
import { HiOutlineHeart } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../../redux/Cartslice'
import { productdetailcontain, } from '../../redux/Productslice'
import { productpopup } from '../../redux/Popup'
 const hover="transform transition-all duration-300 hover:scale-105"
function Topselling() {
  const dispatch=useDispatch()
   const singleproduct=(a)=>{
    dispatch((productdetailcontain(a)))
        dispatch((productpopup()))    
      }
  return (
<>
 <div className='w-full mt-[50px]'>
  <h1 className='font-bold text-3xl  text-black text-center'>Our Top Selling</h1>
   <div className='w-full grid grid-cols-4 py-3 rounded-3xl bg-gray-50 gap-x-4 gap-y-5 sm:grid-cols-2 sm:gap-x-2'>
      {topproduct?.map((a,i)=>(
       <div onClick={()=>singleproduct(a)} className={`h-[280px] place-items-center group
        relative rounded-3xl text-center bg-white ${hover}`} key={a.id}>
        <img className='w-full h-[50%] rounded-t-3xl' src={a.image}/>
        <p className='font-black'>{a.name}</p>
        <p className='font-black'>${a.price}</p>
        <div className='flex items-center'><FaStar/>{a.rate}</div>
        <div className='absolute p-2  rounded-full bg-black  text-white hidden
         group-hover:block sm:block md:block top-2 right-2 '><HiOutlineHeart/>
         </div>
         <div  onClick={()=>dispatch(addtocart(a))}className='absolute p-2  rounded-full bg-black  text-white hidden
         group-hover:block sm:block md:block bottom-1 right-2 '><FaCartShopping/>
         </div>
        </div>
         ))}
    </div>
  </div>
</>
  )
}

export default Topselling
