import Box from '../Components/Box'
import Filter from '../Components/Filter'
import Filterdatas from '../Components/Filterdatas'

function Filterpage() {
  return (
      <Box className='w-full flex mt-[80px]'>
        <Filter/>
        <Filterdatas/>   
      </Box>
  )
}

export default Filterpage
