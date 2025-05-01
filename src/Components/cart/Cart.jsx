import Cartempty from './Cartempty'
import { useSelector } from 'react-redux'
import Pageheading from '../Pageheading'
import Cartcontain from './Cartcontain'
import Carttotal from './Carttotal'
import Box from '../Box'

function Cart() {
  // Get cart products from Redux store
  const { cartproducts } = useSelector(state => state.cart)

  return (
    <>
      {/* Page heading */}
      <Pageheading head="Your cart" />

      {/* If cart is empty, show empty state. Otherwise, show cart content and total */}
      {cartproducts.length < 1 ? (
        <Cartempty />
      ) : (
        <Box className='w-full relative gap-2 flex mt-3 sm:flex-col-reverse sm:p-2'>
          {/* Contains all cart items */}
          <Cartcontain />
          {/* Shows total price and checkout button */}
          <Carttotal />
        </Box>
      )}
    </>
  )
}

export default Cart
