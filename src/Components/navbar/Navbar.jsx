
import Mobilenav from './Mobilenav';
import Desktopnav from './Desktopnav';
import Navbaricons from './Navbaricons';
import { motion } from 'framer-motion';
import { useState } from 'react';
function Navbar() {
  const[open,setopen]=useState(false)
  const openandclose=()=>{
    setopen(!open)
  }
  return (
   <>
  <motion.div
    initial={{opacity:0,y:-100}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.4,delay:0.6}}
    className="w-full fixed bg-white z-50 top-0 right-0 left-0 shadow-md shadow-gray-500  h-[50px] flex
     items-center justify-around">
      <h2 className='text-3xl font-black  mt-1  '>Miniture</h2>
      <Desktopnav/>
      {open&&
        <Mobilenav openandclose={openandclose}/>
      }
      <Navbaricons openandclose={openandclose}/> 
  </motion.div>
  
</>
  )
}

export default Navbar
