import { useSelector } from 'react-redux'
import './carttotal.css'
import { Link } from 'react-router-dom'
import Box from '../Box'
import Button from '../Button'

function Carttotal() {
  const { cartproducts, totalprice } = useSelector((state) => state.cart)
  return (
    <>
  <Box className='w-[20%] border-2 h-[215px] place-content-center space-y-3 mx-auto border-black p-2  rounded-3xl  bg-white sm:w-[80%]'>
      <Box className='carttotal '>Total Items:<span>{cartproducts.length}</span></Box>
      <Box className='carttotal'>Subtotal:<span>{totalprice}</span></Box>
      <Box className='carttotal'>Total:<span>${totalprice}</span></Box>
    <Box className='buttoncontain'>
        <Button className='buttons bg-blue-950 '>Paynow${totalprice}</Button>
        <Link to="/shop"> <Button className='buttons bg-blue-950 '>continue shop</Button></Link>
    </Box>
  </Box>
    </>
  )
}

export default Carttotal
