import { FaTrash } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { cartincrease, cartdecrease, removecart } from '../../redux/Cartslice'
import Box from '../Box'
import Button from '../Button'
import Text from '../Text'

function Cartcontain() {
  const dispatch = useDispatch()
  const { cartproducts } = useSelector(state => state.cart) // Get cart items from Redux store

  return (
    <Box className='w-[75%] mt-3 sm:w-full'>
      {/* Render each product in the cart */}
      {cartproducts?.map((b) => (
        <Box
          key={b.id}
          className='w-full bg-white p-2 shadow-md shadow-gray-400 mb-3 flex gap-3 h-[200px]'
        >
          {/* Product Image */}
          <img className='h-full w-[30%] sm:w-[50%]' src={b.image} alt={b.name} />

          {/* Product Details */}
          <Box className='w-[70%] bg-white flex flex-col space-y-2 text-black font-bold sm:w-[50%]'>
            <Text className='font-bold'>{b.name}</Text>
            <Text className='font-bold text-xl'>${b.price}</Text>

            {/* Quantity Controls */}
            <Box className='flex mt-2 items-center'>
              <Button
                onClick={() => dispatch(cartdecrease(b.id))}
                className='w-14 h-7 bg-white border-2 mr-2 border-gray-300'
              >
                -
              </Button>
              {b.quantity}
              <Button
                onClick={() => dispatch(cartincrease(b.id))}
                className='w-14 h-7 bg-white border-2 ml-2 border-gray-300'
              >
                +
              </Button>
            </Box>

            {/* Subtotal for current item */}
            <Text className='text-md font-bold'>Subtotal: ${b.subtotal}</Text>

            {/* Remove item from cart */}
            <FaTrash
              onClick={() => dispatch(removecart(b))}
              className='ml-3 cursor-pointer text-red-600 hover:scale-110 transition'
            />
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Cartcontain
