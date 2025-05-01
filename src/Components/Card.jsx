/* eslint-disable react/prop-types */


import { useDispatch } from 'react-redux';
import { productdetailcontain } from '../redux/Productslice';  // Action to set the product details
import { Link } from 'react-router-dom';
import { addtocart } from '../redux/Cartslice';  // Action to add product to the cart
import { FaCartShopping, FaStar } from 'react-icons/fa6';  // Icons for cart and star rating
import { HiOutlineHeart } from 'react-icons/hi';  // Icon for heart (like/favorite)
import Box from './Box';
import Text from './Text';

// Tailwind hover effect class for smooth scale transition
const hover = "transform transition-all duration-300 hover:scale-105";

function Card({ product }) {
  const dispatch = useDispatch();

  return (
    <>
      {/* Link to the product details page */}
      <Link className='no-underline' to="/productdetail">
        <Box 
          onClick={() => dispatch(productdetailcontain(product))} // Dispatch action to store product details
          className={`h-[280px] text-black place-items-center group relative rounded-3xl text-center shadow-md shadow-gray-200 bg-white ${hover}`}
        >
          {/* Product image */}
          <img className='w-full h-[50%] rounded-t-3xl' src={product.image} alt={product.name} />
          {/* Product name and price */}
          <Text className='font-black'>{product.name}</Text>
          <Text className='font-black'>${product.price}</Text>
          {/* Product rating */}
          <Box className='flex items-center'>
            <FaStar /> {product.rate}
          </Box>
          {/* Heart icon for favoriting (hidden by default, shown on hover) */}
          <Box 
            className='absolute p-2 rounded-full bg-black text-white hidden group-hover:block sm:block md:block top-2 right-2'
          >
            <HiOutlineHeart aria-label="Add to favorites" />
          </Box>
          {/* Cart icon for adding to cart (hidden by default, shown on hover) */}
          <Box 
            onClick={() => dispatch(addtocart(product))} // Dispatch action to add product to cart
            className='absolute p-2 rounded-full bg-black text-white hidden group-hover:block sm:block md:block bottom-1 right-2'
          >
            <FaCartShopping aria-label="Add to cart" />
          </Box>
        </Box>
      </Link>
    </>
  );
}

export default Card;
