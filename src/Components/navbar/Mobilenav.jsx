import React from 'react'
import navarray from '../../Mainarray/Navarray';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function Mobilenav({openandclose}) {
  return (
    <>
      <motion.div
     initial={{ opacity:0, x: -100 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.3 }}
      className='w-[83%]  bg-white shadow-md shadow-gray-400 absolute  
      top-0 left-0 z-20 h-screen  py-[120px] '>
        {navarray.map((b,index)=>(
        <Link className='no-underline' to={b.links} key={index}>
        <motion.p
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{delay: b.delay,}}
        onClick={()=>openandclose()}className='text-center text-black  mb-4 text-2xl font-bold '>{b.name}</motion.p>
        </Link>
        ))}
      </motion.div>
    </>
  )
}

export default Mobilenav
