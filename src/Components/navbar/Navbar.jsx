import Mobilenav from './Mobiledrawer'; // Mobile navigation component
import Desktopnav from './Desktopnav'; // Desktop navigation component
import Navbaricons from './Navbaricons'; // Navbar icons (e.g., cart, profile)
import { motion } from 'framer-motion'; // For animations
import { useState } from 'react'; // For managing state
import Text from '../Text'; // Text component for displaying the brand name

function Navbar() {
  const [open, setopen] = useState(false); // State for managing mobile drawer visibility
  const drawerpopup = () => {
        setopen(!open)
 }
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }} // Initial animation state: hidden and moved up
        animate={{ opacity: 1, y: 0 }} // Animation state: visible and in place
        transition={{ duration: 0.4, delay: 0.6 }} // Transition duration and delay
        className="w-full fixed bg-white z-50 sm:px-2 top-0 right-0 left-0 shadow-md shadow-gray-500 h-[60px] flex items-center justify-around sm:justify-between"
      >
        <Text className='text-3xl font-black mt-1'>Miniture</Text> {/* Brand name */}
        <Desktopnav /> {/* Desktop navigation links */}
        <Mobilenav drawerpopup={drawerpopup} open={open} /> {/* Mobile navigation */}
        <Navbaricons drawerpopup={drawerpopup} /> {/* Navbar icons (e.g., cart, profile) */}
      </motion.nav>
    </>
  );
}

export default Navbar;
