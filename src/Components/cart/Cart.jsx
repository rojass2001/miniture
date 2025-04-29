import Cartempty from './Cartempty'
import { useSelector } from 'react-redux'
import Pageheading from '../Pageheading'
import Cartcontain from './Cartcontain'
import Carttotal from './Carttotal'
import Box from '../Box'

function Cart() {
  const { cartproducts } = useSelector(state => state.cart)
  return (
  <>
    <Pageheading head="Your cart"/>
    {cartproducts.length<1?
      <Cartempty/>:
      <Box className='w-full relative gap-2 flex mt-3 sm:flex-col-reverse sm:p-2'>
        <Cartcontain/>
        <Carttotal/>
      </Box>
      }
  </>
  )
}

export default Cart
