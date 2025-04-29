import Box from './Box'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../redux/Cartslice'
import { increase, decrease } from '../redux/Productslice'
import Text from './Text'
import Button from "./Button"

function Productdetail() {
  const {productdetails}=useSelector(state=>state.product)
  const dispatch=useDispatch()
  return (
<>
    <Box className='w-full min-h-screen mt-5 place-content-center  justify-center  place-items-center sm:px-1'>
     <Box className=' w-[50%] min-h-[300px] py-2  relative flex gap-3 mx-auto shadow-md bg-white shadow-gray-400 sm:flex-col sm:w-full md:min-h-[380px] md:w-[70%]'>
        <Box className='h-[300px]  w-[50%]  sm:w-full'>
          <img className='h-full w-full ' src={productdetails?.image}/>
        </Box>
           <Box className='w-[60%] sm:w-full sm:text-center sm:place-items-center sm:justify-center font-bold text-black pt-3'>
             <Text className='font-bold'>{productdetails?.name}</Text>
             <Text>{productdetails?.des}</Text>
             <Text className=' text-xl '>${productdetails?.price}</Text>
            <Text className='text-green-400 text-sm'>{productdetails?.stocks}</Text>
            <Button onClick={() =>dispatch(decrease())} className='w-16 border-[1px] h-9 border-gray-300 mr-2'>-</Button>
            <span className='text-xl mt-1'> {productdetails?.quantity}</span>
            <Button onClick={() => dispatch(increase()) } className='w-16 border-[1px] h-9 border-gray-300 ml-2'>+</Button><br/>
            <Button onClick={() => dispatch(addtocart(productdetails))} className='w-[120px] h-10 mt-2  bg-orange-400 '>Addtocart</Button>
            <Button className='w-[120px] h-10 ml-2 bg-orange-400 '>PayNow${productdetails?.price*productdetails?.quantity}</Button>
          </Box>
       </Box>      
    </Box>
</>
  )
}

export default Productdetail
