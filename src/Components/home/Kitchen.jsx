/* eslint-disable react/jsx-key */
import kitchen from '../../Mainarray/Kitchenarray'
import { FaCartShopping } from 'react-icons/fa6'
import { HiOutlineHeart } from 'react-icons/hi'
import { productdetailcontain } from '../../redux/Productslice'
import { useDispatch } from 'react-redux'
import { addtocart } from '../../redux/Cartslice'
import { Link } from 'react-router-dom'
import Box from '../Box'
import Text from '../Text'

// Style classes for cart and wishlist icons (shown on hover)
const carticons = "absolute p-2 rounded-full bg-black text-white hidden group-hover:block sm:block md:block";
const hover = "transform transition-all duration-300 hover:scale-105"

function Kitchen() {
  const dispatch = useDispatch()

  return (
    <>
      {/* Page Container */}
      <Box className='w-full mt-[90px] sm:mt-[150px]'>

        {/* Heading */}
        <Text className='text-3xl text-center font-bold text-black mb-4'>
          You Are In Kitchen
        </Text>

        {/* Product Grid */}
        <Box className='w-full grid grid-cols-4 gap-x-6 gap-y-3 sm:grid-cols-2 sm:gap-x-2'>
          {kitchen?.map((a) => (
            <Link to="/productdetail" key={a.id}>
              {/* Product Card */}
              <Box
                onClick={() => dispatch(productdetailcontain(a))}
                className={`rounded-2xl group relative ${hover} h-[280px] sm:h-[200px]`}
              >
                {/* Product Image */}
                <img className="w-full h-full rounded-3xl" src={a.image} />

                {/* Wishlist Icon */}
                <div className={`${carticons} top-2 right-2`}>
                  <HiOutlineHeart size={23} />
                </div>

                {/* Cart Icon */}
                <div className={`${carticons} right-2 bottom-4`}>
                  <FaCartShopping
                    onClick={(e) => {
                      e.preventDefault() // Prevents navigation when clicking the icon
                      dispatch(addtocart(a))
                    }}
                    size={23}
                  />
                </div>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default Kitchen
