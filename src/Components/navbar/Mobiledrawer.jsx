/* eslint-disable react/prop-types */
import navarray from './Navarray';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setlogout } from '../../redux/loginslice';

function Mobiledrawer({ openandclose, open }) {
  const dispatch=useDispatch()
  const signout = async() => {
    await openandclose()
    dispatch(setlogout())
  }
  return (
    
    <AnimatePresence mode="wait">
      {open && (
        <motion.header
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, delay: 0.2}}
            className='w-[83%]  bg-white shadow-md shadow-gray-400 absolute top-0 left-0 z-20 h-screen py-[120px] '>
            {navarray.map((b, index) => (
              <Link className='no-underline' to={b.links} key={index}>
                <motion.li
                  initial={{ opacity: 0, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: b.delay, }}
                  onClick={() => openandclose()} className='text-center list-none text-black  mb-4 text-2xl font-bold '>{b.name}</motion.li>
              </Link>
            ))} 
       </motion.header>
        )}
    </AnimatePresence>
    
  )
}

export default Mobiledrawer
