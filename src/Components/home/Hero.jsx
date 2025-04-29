import { MdOutlineChair } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Box from '../Box'
import Text from '../Text'

function Hero() {
  return (
    <>
  <Box className='w-full  py-2'>
    <Box className='flex items-center text-black'>
      <Box className=" bg-orange-400 flex items-center place-content-center rounded-full
        hover:bg-red-600 w-12  h-9 sm:w-16 sm:h-12 text-white"><MdOutlineChair className=''size={32}/>
      </Box> 
        <Text className='text-4xl mb-2 font-bold '>Eleveate Your Lifestyle</Text>
    </Box>
    <Text className='text-4xl text-black font-bold '>With Our Furniture</Text>
     <Box className='flex gap-3 font-bold'>
        <Text className='text-4xl text-black  '>Creation</Text>
        <Link className='no-underline' to="/shop">
        <Box className=' bg-orange-400 flex items-center text-white text-center place-content-center w-[150px] h-10'>Shop Now</Box>
        </Link>
     </Box>
  </Box>
   </>
  )
}

export default Hero
