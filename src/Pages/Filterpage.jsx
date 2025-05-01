// Import required components
import Box from '../Components/Box'
import Filter from '../Components/Filter'
import Filterdatas from '../Components/Filterdatas'

function Filterpage() {
  return (
    // Main container box with layout and spacing
    <Box className='w-full flex mt-[80px] py-2'>
      
      {/* Sidebar or section for filtering options */}
      <Filter />

      {/* Section displaying the filtered data or products */}
      <Filterdatas />
      
    </Box>
  )
}

export default Filterpage // Export the filter page component
