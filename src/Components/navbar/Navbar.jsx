import Mobilenav from './Mobiledrawer';
import Desktopnav from './Desktopnav';
import Navbaricons from './Navbaricons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Text from '../Text';

function Navbar() {
  const[open,setopen]=useState(false)
  const openandclose=()=>{
    setopen(!open)
  }
  return (
 <>
  <motion.nav
    initial={{opacity:0,y:-100}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.4,delay:0.6}}
    className="w-full fixed bg-white z-50 sm:px-2 top-0 right-0 left-0 shadow-md shadow-gray-500 h-[60px] flex
     items-center justify-around sm:justify-between ">
      <Text className='text-3xl font-black  mt-1  '>Miniture</Text>
      <Desktopnav/>
      <Mobilenav openandclose={openandclose} open={open} />
      <Navbaricons openandclose={openandclose}/> 
  </motion.nav> 
 </>
  )
}

export default Navbar
