/* eslint-disable react/prop-types */
import Box from "./Box"
import Text from "./Text"

function Pageheading({ head }) {
  return (
    <>
  <Box className='w-full relative h-[300px] mt-[60px] sm:h-[200px]'>
   <img className='w-full h-full' src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/page_header.jpeg?raw=true"/>
   <Box className='font-bold absolute bottom-12 left-6 text-black'>
    <Text className='font-bold text-4xl'>{head}</Text>
  </Box>
  </Box>
    </>
  )
}
export default Pageheading
