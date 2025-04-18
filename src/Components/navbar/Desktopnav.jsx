import navarray from './Navarray'
import { Link } from 'react-router-dom'
import { setlogout } from '../../redux/loginslice'
import { useDispatch } from 'react-redux'
const hover = "transform transition-all duration-300 hover:scale-110"
 
function Desktopnav() {
   const dispatch=useDispatch()
  return (
    <>
    <nav className='desktopnav flex items-center list-none font-black text-[14px] space-x-5 sm:hidden '>    
        {navarray.map((a,i)=>(
        <Link className='no-underline' to={a.links} key={i}>
        <li className={`text-[18px] text-black font-bold ${hover}`}>{a.name}</li>
        </Link>
        ))}
        <Link to="/login" className='no-underline'><li onClick={()=>dispatch(setlogout())} className={`text-[18px] text-black font-bold ${hover}`}>logout</li></Link>
      </nav> 
      </>
  )
  }

export default Desktopnav
