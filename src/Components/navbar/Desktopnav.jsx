import navarray from '../../Mainarray/Navarray'
import { Link } from 'react-router-dom'
 const hover="transform transition-all duration-300 hover:scale-110"
 function Desktopnav() {
  return (
    <>
    <li className='desktopnav flex items-center list-none font-black text-[14px] space-x-5 sm:hidden '>    
        {navarray.map((a,i)=>(
        <Link className='no-underline' to={a.links} key={i}>
        <li className={`text-[18px] text-black font-bold ${hover}`}>{a.name}</li>
        </Link>
        ))  }
      </li> 
      </>
  )
  }

export default Desktopnav
