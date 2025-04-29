import Box from '../Components/Box';
import Pageheading from '../Components/Pageheading';
import Text from '../Components/Text';

const About = () => {
  return (
   <>
    < Pageheading head="About us"/>
    <Box className='w-full flex sm:flex-col p-3'>
      <Box className='w-[50%] sm:w-full'>
        <Text className='text-black font-bold'>Our Agency Story</Text>
        <Text className='font-bold text-xl'>Check out our company story and work process</Text>
        <Box className='text-black font-bold'>
        Furniture e-commerce has revolutionized how people buy and sell 
        products, offering a convenient and efficient shopping experience
        through digital platforms. This process encompasses the entire journey, from browsing and selection to purchase and deliver
        </Box>
      </Box>
      <img className=' w-[50%]  h-[400px] sm:w-full' 
      src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/kids_room.jpg?raw=true"/>
   </Box>
  </>            
  )
};

export default About
