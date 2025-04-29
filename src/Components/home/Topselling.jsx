import topproduct from '../../Mainarray/Topselarray'
import Box from '../Box'
import Card from '../Card'
import Text from '../Text'

function Topselling() {
  return (
  <>
  <Box className='w-full mt-[50px]'>
    <Text className='font-bold text-3xl  text-black text-center'>Our Top Selling</Text>
    <Box className='w-full grid grid-cols-4 py-3 rounded-3xl bg-gray-50 gap-x-4 gap-y-5 sm:grid-cols-2 sm:gap-x-2'>
        {topproduct?.map((a)=>(
          <Card product={a} key={a.id}/>
          ))}
    </Box>
  </Box>
  </>
  )
}

export default Topselling
