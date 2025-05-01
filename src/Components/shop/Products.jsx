import Box from '../Box'
import Filter from '../Filter'
import Allproduct from './Allproduct'

// Products component renders the main layout for displaying all products and the filter section
function Products() {
  return (
    <>
      {/* Container Box with top margin and padding to space the layout below the header */}
      <Box className='w-full flex py-3 mt-[80px]'>
        
        {/* Filter section (e.g., categories, price range, etc.) */}
        <Filter />

        {/* Product listing section */}
        <Allproduct />

      </Box>
    </>
  )
}

export default Products // Exporting the component for use in routing or parent components
