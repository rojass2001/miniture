import { FaBars } from 'react-icons/fa6'; // Icon for the mobile menu
import { HiOutlineUser } from 'react-icons/hi'; // Icon for user (login/profile)
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi"; // More options icon (vertical dots)
import { MdOutlineShoppingBag } from 'react-icons/md'; // Shopping bag icon (cart)
import { useSelector } from 'react-redux'; // For accessing state from Redux
import { Link } from 'react-router-dom'; // For navigation links
import { IoSettingsOutline } from "react-icons/io5"; // Settings icon (used for logout button)
import useAuth from '../../customhooks/useauth'; // Custom hook for authentication logic
import Box from '../Box'; // Box component for layout
import Button from '../Button'; // Button component

// eslint-disable-next-line react/prop-types
function Navbaricons({ drawerpopup }) {
  const { logout } = useAuth(); // Get logout function from custom hook
  const { cartproducts } = useSelector(state => state.cart); // Access cart state from Redux

  return (
    <Box className='flex text-2xl items-center mb-1 gap-3 sm:gap-0 '>
      {/* Link to login page (user profile icon) */}
      <Link to="/login"> 
        <HiOutlineUser className='text-black' size={24} />
      </Link>

      {/* Shopping cart icon */}
      <Box className='relative'>
        <Link to="/cart">
          <MdOutlineShoppingBag className='text-black' size={24} />
        </Link>
        {/* Show item count in cart if there are items */}
        {cartproducts.length > 0 && (
          <Box className="absolute text-white right-[-8px] top-[-8px] text-sm place-content-center text-center bg-orange-500 w-5 h-5 rounded-full sm:right-[-1px] sm:w-4 sm:h-4 animate-bounce">
            {cartproducts.length}
          </Box> 
        )}
      </Box>

      {/* More options button */}
      <Box className=" flex items-center place-content-center">
        <Box className="group">
          <PiDotsThreeOutlineVerticalFill className='group' />
          {/* Mobile menu toggle icon (only visible on sm and larger screens) */}
        
        
          {/* Logout button visible on hover */}
          {/* Link to the login page, triggered on logout */}
            <Button onClick={logout} className='hidden group-hover:flex absolute top-[40px] gap-1 items-center place-content-center bg-white shadow-md text-black shadow-gray-300 rounded-lg right-[50px] sm:right-[0px] px-4 py-3 font-bold text-sm'>
              <IoSettingsOutline />Logout
            </Button>
        </Box>
        <FaBars onClick={drawerpopup} className='hidden sm:block' size={35} />
      </Box>
    </Box> 
  );
}

export default Navbaricons;
