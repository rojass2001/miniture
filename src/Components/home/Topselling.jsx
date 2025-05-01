import topproduct from '../../Mainarray/Topselarray'
import Box from '../Box'
import Card from '../Card'
import Text from '../Text'

function Topselling() {
  return (
    <>
      {/* Main container for the top selling section */}
      <Box className='w-full mt-[50px]'>

        {/* Section heading */}
        <Text className='font-bold text-3xl text-black text-center'>
          Our Top Selling
        </Text>

        {/* Product grid: 4 columns on large screens, 2 on small */}
        <Box className='w-full grid grid-cols-4 py-3 rounded-3xl bg-gray-50 gap-x-4 gap-y-5 sm:grid-cols-2 sm:gap-x-2'>
          {topproduct?.map((a) => (
            // Render each product using the reusable Card component
            <Card product={a} key={a.id} />
          ))}
        </Box>
        
      </Box>
    </>
  )
}

export default Topselling
