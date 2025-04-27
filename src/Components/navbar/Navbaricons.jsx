import { FaBars } from 'react-icons/fa6'
import { HiOutlineHeart, HiOutlineUser } from 'react-icons/hi'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdOutlineShoppingBag } from 'react-icons/md'
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { setlogout } from '../../redux/loginslice';
import useAuth from '../../customhooks/useauth';
;
function Navbaricons({ openandclose }) {
  const{logout}=useAuth()
  const [dots,setdots]=useState(false)
  const{cartproducts}=useSelector(state=>state.cart)
  return (
       <div className='flex  text-2xl items-center mb-1 gap-3 sm:gap-0 '>
       <Link to="/login"> <HiOutlineUser className='text-black'  size={24}/></Link>
          <div className='relative '>
            <Link to="/cart"><MdOutlineShoppingBag className='text-black' size={24} /></Link>
            {cartproducts.length>0&&
              <div className="absolute  text-white right-[-8px] top-[-8px] text-sm place-content-center text-center bg-orange-500 
              w-5 h-5 rounded-full sm:right-[-1px] sm:w-4 sm:h-4 animate-bounce">{cartproducts.length}</div> 
            }   
        </div>
        <PiDotsThreeOutlineVerticalFill onClick={() => setdots(!dots)}/>
        <FaBars onClick={() => openandclose()} className='hidden  sm:block' size={35} /> 
        {
          dots && (
          <Link onClick={logout} to="/login">  <button onClick={()=>setdots(!dots)} className='absolute top-[55px] flex gap-1 items-center place-content-center bg-white shadow-md text-black shadow-gray-300 rounded-lg right-[75px] sm:right-2 px-4 py-3 font-bold 
             text-sm'><IoSettingsOutline/>Logout</button> </Link>
          )
        }
      </div>
    
  )
}

export default Navbaricons
