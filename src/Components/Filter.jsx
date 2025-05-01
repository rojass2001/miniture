import { Link } from 'react-router-dom'; // For navigation to other pages
import useFilter from '../customhooks/usefilter'; // Custom hook to manage filter state (price & categories)
import Box from './Box'; // Layout container component
import Text from './Text'; // Component for displaying text

const filter = ["new", "old", "plastic", "wood", "cusion", "metal"]; // Filter categories for products (e.g., material types)

function Filter() {
  const { data, pricecategory, handlechange } = useFilter(); // Destructure state and handlers from the custom hook

  return (
    <Box className='w-[20%] py-3 bg-white shadow-md pl-2 h-screen shadow-gray-300 sm:w-[40%]'>
      {/* Filter section heading */}
      <Text className='text-4xl font-bold text-black sm:text-xl'>Filter By Price</Text>
      
      {/* Price range display */}
      <Box className='flex w-full justify-between'>
        <Text>min:$30</Text>
        <Text>max:$300</Text>
      </Box>
      
      {/* Price slider to adjust range */}
      <Box className='flex justify-between'>
        <input
          className='accent-slate-950 w-[150px] sm:w-[80px]'
          type="range"
          min={30} // Minimum price
          max={300} // Maximum price
          step={1} // Step value for the slider
          value={data} // Bind value to filter state
          onChange={pricecategory} // Trigger handler on change
        />
        <Text>${data}</Text> {/* Display the selected price */}
      </Box>
      
      {/* Category filter section */}
      <Text className='text-2xl font-bold text-black sm:text-xl'>By Category</Text>
      
      {/* Link to the "shop" page */}
      <Link to="/shop">
        <input type="radio" name="category" />
      </Link>
      <label className='ml-1 mb-1'>all</label><br />
      
      {/* Render category filter options dynamically */}
      {filter.map((b) => (
        <Box key={b}>
          <input
            type="radio"
            name="category" // All categories share the same name
            value={b} // Category name as the value
            onChange={handlechange} // Trigger handle change for category
          />
          <label className='ml-1 mb-1' htmlFor={b}>{b}</label><br />
        </Box>
      ))}
    </Box>
  );
}

export default Filter;
