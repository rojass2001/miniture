import { useSelector } from 'react-redux'; // Import to access the Redux store state
import Searchbar from './Searchbar'; // Searchbar component for filtering products
import Card from './Card'; // Card component for displaying individual products
import Box from './Box'; // Box component for layout and styling

function Filterdatas() {
  const { filterproducts } = useSelector(state => state.product); // Access filtered products from Redux store

  return (
    <Box className='w-full '>
      <Searchbar /> {/* Display the search bar for filtering products */}
      
      {/* Check if there are any filtered products */}
      {filterproducts.length < 1 ? (
        <Box className='w-full h-screen text-5xl place-content-start text-center'>
          No Search Found {/* Show message if no products match the search */}
        </Box>
      ) : (
        <Box className='w-full sm:h-screen overflow-y-auto mt-12 pb-10 px-12 mb-4 grid gap-5 grid-cols-4 sm:grid-cols-1 md:grid-cols-3 md:px-3 sm:px-1'>
          {/* Map through the filtered products and display them in Cards */}
          {filterproducts?.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Filterdatas;
