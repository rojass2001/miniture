import { FaBars } from 'react-icons/fa6'
import {  HiOutlineUser } from 'react-icons/hi'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { MdOutlineShoppingBag } from 'react-icons/md'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoSettingsOutline } from "react-icons/io5";
import useAuth from '../../customhooks/useauth';
import Box from '../Box';
import Button from '../Button';

// eslint-disable-next-line react/prop-types
function Navbaricons({openandclose}) {
  const{logout}=useAuth()
  const{cartproducts}=useSelector(state=>state.cart)
  return (
   <Box className='flex   text-2xl items-center mb-1 gap-3 sm:gap-0 '>
    <Link to="/login"> <HiOutlineUser className='text-black'  size={24}/></Link>
      <Box className='relative '>
        <Link to="/cart"><MdOutlineShoppingBag className='text-black' size={24} /></Link>
          {cartproducts.length>0&&
            <Box className="absolute  text-white right-[-8px] top-[-8px] text-sm place-content-center text-center bg-orange-500 
                  w-5 h-5 rounded-full sm:right-[-1px] sm:w-4 sm:h-4 animate-bounce">{cartproducts.length}
            </Box> 
          }   
      </Box>
      <Box className="group flex items-center place-content-center">
       <PiDotsThreeOutlineVerticalFill className='group' />
       <FaBars onClick={openandclose} className='hidden  sm:block' size={35} /> 
       <Link onClick={logout} to="/login"><Button  className='hidden group-hover:flex absolute top-[42px] gap-1 items-center place-content-center bg-white shadow-md text-black shadow-gray-300 rounded-lg right-[50px] sm:right-[0px] px-4 py-3 font-bold 
             text-sm'><IoSettingsOutline />Logout</Button>
       </Link>
      </Box>
    </Box> 
  )
}
export default Navbaricons
