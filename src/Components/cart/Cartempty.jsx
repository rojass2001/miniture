import Box from "../Box"
import Text from "../Text"

function Cartempty() {
  return (
    <>
      <Box className='w-full pt-[40px] text-center justify-center h-screen'>
        <Text className='font-bold text-4xl text-black'>Your cart is Empty</Text>
      </Box>
    </>
  )
}

export default Cartempty
