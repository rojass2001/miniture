import Box from '../Box'
import Filter from '../Filter'
import Allproduct from './Allproduct'

function Products() {
  return (
  <>
    <Box className='w-full flex py-3 mt-[80px]'>
      <Filter/>
      <Allproduct/>
    </Box>
  </>
  )
}

export default Products
