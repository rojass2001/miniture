import Box from './Box'; // Layout component for structuring the page
import { useDispatch, useSelector } from 'react-redux'; // Redux hooks for state management
import { addtocart } from '../redux/Cartslice'; // Action to add product to cart
import { increase, decrease } from '../redux/Productslice'; // Actions to increase or decrease quantity
import Text from './Text'; // Text component to render text
import Button from "./Button"; // Button component for interactive buttons

function Productdetail() {
  // Extracting product details from the Redux state
  const { productdetails } = useSelector(state => state.product);
  const dispatch = useDispatch(); // Dispatch function to send actions

  return (
    <>
      {/* Main container Box for the product details */}
      <Box className='w-full min-h-screen mt-5 place-content-center justify-center place-items-center sm:px-1'>
        {/* Box for product image and details */}
        <Box className='w-[50%] min-h-[300px] py-2 relative flex gap-3 mx-auto shadow-md bg-white shadow-gray-400 sm:flex-col sm:w-full md:min-h-[380px] md:w-[70%]'>
          {/* Product image box */}
          <Box className='h-[300px] w-[50%] sm:w-full'>
            <img className='h-full w-full' src={productdetails?.image} alt={productdetails?.name} />
          </Box>
          
          {/* Product details */}
          <Box className='w-[60%] sm:w-full sm:text-center sm:place-items-center sm:justify-center font-bold text-black pt-3'>
            {/* Product name */}
            <Text className='font-bold'>{productdetails?.name}</Text>
            {/*Product description*/}
            <Text>{productdetails?.des}</Text>
            {/* Product price */}
            <Text className='text-xl'>${productdetails?.price}</Text>
            {/* Product stock status */}
            <Text className='text-green-400 text-sm'>{productdetails?.stocks}</Text>
            
            {/* Quantity control */}
            <Button onClick={() => dispatch(decrease())} className='w-16 border-[1px] h-9 border-gray-300 mr-2'>-</Button>
            <span className='text-xl mt-1'> {productdetails?.quantity}</span>
            <Button onClick={() => dispatch(increase())} className='w-16 border-[1px] h-9 border-gray-300 ml-2'>+</Button><br/>
            
            {/* Add to Cart button */}
            <Button onClick={() => dispatch(addtocart(productdetails))} className='w-[120px] h-10 mt-2 bg-orange-400'>
              Add to Cart
            </Button>
            
            {/* Pay Now button */}
            <Button className='w-[120px] h-10 ml-2 bg-orange-400'>
              Pay Now ${productdetails?.price * productdetails?.quantity}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Productdetail;
