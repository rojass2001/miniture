import React from 'react'
import navarray from '../../Mainarray/Navarray'
import { Link } from 'react-router-dom'
 const hover="transform transition-all duration-300 hover:scale-110"
function Desktopnav() {
  return (
    <>
    <div className='desktopnav flex justify-center font-black text-[18px] space-x-5 sm:hidden '>    
        {navarray.map((a,i)=>(
        <Link className='no-underline' to={a.links} key={i}>
        <p className={`text-[18px] text-black font-bold ${hover}`}>{a.name}</p>
        </Link>
        ))  }
      </div> 
      </>
  )
}

export default Desktopnav
