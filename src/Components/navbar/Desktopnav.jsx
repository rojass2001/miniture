import navarray from './Navarray'
import { Link } from 'react-router-dom'

// Tailwind class for hover effect on nav items
const hover = "transform transition-all duration-300 hover:scale-110"

function Desktopnav() {
  return (
    // Navigation container: hides on small screens, displayed on desktop
    <nav className='desktopnav flex items-center list-none font-black text-[14px] space-x-5 sm:hidden '>    

      {/* Loop through the navarray to generate links dynamically */}
      {navarray.map((a, i) => (
        <Link className='no-underline' to={a.links} key={i}>
          {/* Navigation link with hover effect */}
          <li className={`text-[18px] text-black font-bold ${hover}`}>
            {a.name}
          </li>
        </Link>
      ))} 
    </nav> 
  )
}

export default Desktopnav
