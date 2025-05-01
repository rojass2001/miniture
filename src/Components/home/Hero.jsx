import { MdOutlineChair } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Box from '../Box'
import Text from '../Text'

function Hero() {
  return (
    <>
      {/* Hero Section Container */}
      <Box className='w-full py-2'>

        {/* Header Row with Icon and Main Title */}
        <Box className='flex items-center text-black'>
          {/* Decorative Chair Icon */}
          <Box className="bg-orange-400 flex items-center place-content-center rounded-full
            hover:bg-red-600 w-12 h-9 sm:w-16 sm:h-12 text-white">
            <MdOutlineChair size={32} />
          </Box>

          {/* Main Heading */}
          <Text className='text-4xl mb-2 font-bold'>Elevate Your Lifestyle</Text>
        </Box>

        {/* Subheading */}
        <Text className='text-4xl text-black font-bold'>With Our Furniture</Text>

        {/* CTA Section: Slogan and Button */}
        <Box className='flex gap-3 font-bold'>
          <Text className='text-4xl text-black'>Creation</Text>

          {/* Shop Now Button */}
          <Link className='no-underline' to="/shop">
            <Box className='bg-orange-400 flex items-center text-white text-center place-content-center w-[150px] h-10'>
              Shop Now
            </Box>
          </Link>
        </Box>

      </Box>
    </>
  )
}

export default Hero
