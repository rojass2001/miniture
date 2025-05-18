import { useEffect } from 'react'; // Importing useEffect hook for side-effects
import { allproducts } from '../../Mainarray/Allproducts'; // Importing the products array
import { useDispatch, useSelector } from 'react-redux'; // For state management with Redux
import Searchbar from '../Searchbar'; // Searchbar component for searching products
import Card from '../Card'; // Card component to display individual products
import { setproducts } from '../../redux/Productslice'; // Action to set products in the Redux store
import Box from '../Box'; // Box component for layout and styling

function Allproduct() {
  // Accessing allproducts from Redux store using useSelector
  const { allproduct } = useSelector((state) => state.product);
  const dispatch = useDispatch(); // Dispatch function to dispatch actions to Redux store

  // useEffect to dispatch action to set products in the Redux store when the component mounts
  useEffect(() => {
    dispatch(setproducts(allproducts)); // Dispatching the setproducts action to load all products
  }, [dispatch]); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <Box className='w-full'>
      {/* Search bar component for filtering or searching products */}
      <Searchbar />

      {/* Main container for displaying products in a grid */}
      <Box className='w-full h-screen overflow-y-auto mt-12 px-12 mb-4 grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-2 md:px-3 sm:px-1'>
        {/* Looping over all products to display each product using the Card component */}
        {allproduct?.map((product) => (
          <Card product={product} key={product.id} /> // Passing each product as a prop to the Card component
        ))}
      </Box>
    </Box>
  );
}

export default Allproduct;
