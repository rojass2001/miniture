import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Productdetail from '../Productdetail';
import Mobilenav from './Mobilenav';
import Desktopnav from './Desktopnav';
import Navbaricons from './Navbaricons';
import Loginorregister from '../Loginorregister';
import { motion } from 'framer-motion';
function Navbar() {
  const{detail}=useSelector(state=>state.popup)
  const{logincontain}=useSelector(state=>state.popup)
  const[open,setopen]=useState(false)
  const openandclose=()=>{
    setopen(!open)
  }
  return (
   <>
  <motion.div
   initial={{opacity:0,y:-100}}
   animate={{opacity:1,y:0}}
   transition={{duration:0.4,delay:0.5}}
   className="w-full fixed bg-white z-50 top-0 right-0 left-0 shadow-md
    shadow-gray-500  h-[60px] flex items-center justify-around">
    <p className='text-3xl font-black  mt-1  '>Miniture</p>
     <Desktopnav/>
    {open&&
      <Mobilenav openandclose={openandclose}/>
    }
     <Navbaricons openandclose={openandclose}/>
      {detail&&
        <Productdetail/>
      }
     
  </motion.div>
  {logincontain&&
   <Loginorregister/>
  }
  
</>
  )
}

export default Navbar
