import { useSelector } from 'react-redux'
import './carttotal.css'
import { Link } from 'react-router-dom'
import Box from '../Box'
import Button from '../Button'

function Carttotal() {
  // Access cart products and total price from Redux store
  const { cartproducts, totalprice } = useSelector((state) => state.cart)

  return (
    <>
      {/* Cart Summary Container */}
      <Box className='w-[20%] border-2 h-[215px] place-content-center space-y-3 mx-auto border-black p-2 rounded-3xl bg-white sm:w-[80%]'>
        
        {/* Display total number of items */}
        <Box className='carttotal'>
          Total Items: <span>{cartproducts.length}</span>
        </Box>

        {/* Display subtotal (raw amount without tax/shipping) */}
        <Box className='carttotal'>
          Subtotal: <span>{totalprice}</span>
        </Box>

        {/* Display total price (you could enhance this with tax/shipping logic) */}
        <Box className='carttotal'>
          Total: <span>${totalprice}</span>
        </Box>

        {/* Action buttons for payment and navigation */}
        <Box className='buttoncontain'>
          <Button className='buttons bg-blue-950'>Paynow ${totalprice}</Button>
          <Link to="/shop">
            <Button className='buttons bg-blue-950'>Continue Shop</Button>
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default Carttotal
