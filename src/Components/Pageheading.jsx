/* eslint-disable react/prop-types */
import Box from "./Box"; // Importing Box component for layout
import Text from "./Text"; // Importing Text component for text display

function Pageheading({ head }) {
  return (
    <>
      {/* Container Box for the page heading, with relative positioning for the image and text */}
      <Box className='w-full relative h-[300px] mt-[60px] sm:h-[200px]'>
        {/* Background image for the page heading */}
        <img
          className='w-full h-full'
          src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/page_header.jpeg?raw=true"
          alt="Page Header"
        />
        
        {/* Box for text content, positioned at the bottom left of the container */}
        <Box className='font-bold absolute bottom-12 left-6 text-black'>
          {/* Display the heading text */}
          <Text className='font-bold text-4xl'>{head}</Text>
        </Box>
      </Box>
    </>
  );
}

export default Pageheading;
