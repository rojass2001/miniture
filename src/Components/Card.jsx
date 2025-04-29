/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { useDispatch } from 'react-redux'
import { productdetailcontain } from '../redux/Productslice'
import { Link } from 'react-router-dom'
import { addtocart } from '../redux/Cartslice'
import { FaCartShopping, FaStar } from 'react-icons/fa6'
import { HiOutlineHeart } from 'react-icons/hi'
import Box from './Box'
import Text from './Text'
const hover = "transform transition-all duration-300 hover:scale-105"
 
function Card({product}) {
    const dispatch=useDispatch()
  return (
    <>
  <Link className='no-underline' to="/productdetail">
    <Box onClick={()=>dispatch(productdetailcontain(product))} className={`h-[280px] text-black place-items-center group
      relative rounded-3xl text-center shadow-md shadow-gray-200 bg-white ${hover}`} >
      <img className='w-full h-[50%] rounded-t-3xl' src={product.image}/>
      <Text className='font-black'>{product.name}</Text>
      <Text className='font-black'>${product.price}</Text>
      <Box className='flex items-center'><FaStar />{product.rate}</Box>
      <Box className='absolute p-2  rounded-full bg-black  text-white hidden group-hover:block sm:block md:block top-2 right-2 '><HiOutlineHeart/></Box>
      <Box onClick={()=>dispatch(addtocart(product))}className='absolute p-2  rounded-full bg-black  text-white hidden
          group-hover:block sm:block md:block bottom-1 right-2 '><FaCartShopping/>
      </Box>
    </Box>
  </Link>
    </>
  )
}

export default Card
