/* eslint-disable react/prop-types */
import navarray from './Navarray'; // Importing the navigation items
import { Link } from 'react-router-dom'; // For navigation links
import { AnimatePresence, motion } from 'framer-motion'; // Import for animation effects

function Mobiledrawer({ openandclose, open }) {
  return ( 
    // AnimatePresence ensures that the motion component transitions properly when it enters and exits
    <AnimatePresence mode="wait">
      {open && (
        <motion.header
          // Animation settings for the drawer: fades in and slides from the left
          initial={{ opacity: 0, x: -100 }} // Start hidden and off-screen
          animate={{ opacity: 1, x: 0 }} // Fade in and slide to the position
          exit={{ opacity: 0, x: -100 }} // Fade out and slide back off-screen
          transition={{ duration: 0.3, delay: 0.2 }} // Smooth transition with delay
          className='w-[83%] bg-white shadow-md shadow-gray-400 absolute top-0 left-0 z-20 h-screen py-[120px]'
        >
          {/* Loop through navarray to create navigation items */}
          {navarray.map((b, index) => (
            <Link className='no-underline' to={b.links} key={index}>
              {/* Motion list item for each navigation link with animation on scroll */}
              <motion.li
                initial={{ opacity: 0, x: -200 }} // Start from hidden off-screen left
                whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to position
                transition={{ delay: b.delay }} // Delay the animation based on item-specific delay
                onClick={() => openandclose()} // Close the drawer when a link is clicked
                className='text-center list-none text-black mb-4 text-2xl font-bold'
              >
                {b.name}
              </motion.li>
            </Link>
          ))}
        </motion.header>
      )}
    </AnimatePresence>
  )
}

export default Mobiledrawer;
