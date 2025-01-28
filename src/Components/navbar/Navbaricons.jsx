import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { HiOutlineHeart, HiOutlineUser } from 'react-icons/hi'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { loginpopup } from '../../redux/Popup'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar'
function Navbaricons({openandclose}) {
  const{cartproducts}=useSelector(state=>state.cart)
 const dispatch=useDispatch()
  return (
    <>
       <div className='flex  text-2xl items-center mb-1 gap-3 sm:gap-0 '>
       <HiOutlineHeart className='text-black'/>
   <HiOutlineUser className='text-black' onClick={()=>dispatch(loginpopup())} size={24}/>
   
          <div className='relative '>
            <Link  to="/cart"><MdOutlineShoppingBag className='text-black' size={24} /></Link>
            {cartproducts.length>0&&
              <div className="absolute  text-white right-[-8px] top-[-8px] text-sm place-content-center text-center bg-orange-500 
              w-5 h-5 rounded-full sm:right-[-1px] sm:w-4 sm:h-4">{cartproducts.length}</div> 
            }   
          </div>
        <FaBars onClick={()=>openandclose()} className='hidden  sm:block' size={35}/> 
      </div>
    </>
  )
}

export default Navbaricons
