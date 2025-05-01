import Box from '../Components/Box'; // Layout component to structure content
import Pageheading from '../Components/Pageheading'; // Component for page header
import Text from '../Components/Text'; // Component for displaying text

const About = () => {
  return (
   <>
    {/* Pageheading component that displays the heading for the "About us" page */}
    <Pageheading head="About us"/>
    
    {/* Main container for the about content */}
    <Box className='w-full flex sm:flex-col p-3'>
      
      {/* First section with text content */}
      <Box className='w-[50%] sm:w-full'>
        <Text className='text-black font-bold'>Our Agency Story</Text> {/* Subheading for the agency story */}
        <Text className='font-bold text-xl'>Check out our company story and work process</Text> {/* Description heading */}
        
        {/* Paragraph detailing the company's story */}
        <Box className='text-black font-bold'>
          Furniture e-commerce has revolutionized how people buy and sell 
          products, offering a convenient and efficient shopping experience
          through digital platforms. This process encompasses the entire journey, from browsing and selection to purchase and delivery.
        </Box>
      </Box>
      
      {/* Image depicting a room setup (presumably related to furniture) */}
      <img 
        className='w-[50%] h-[400px] sm:w-full' 
        src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/kids_room.jpg?raw=true" 
        alt="Kids Room" 
      />
   </Box>
  </>            
  );
};

export default About;
