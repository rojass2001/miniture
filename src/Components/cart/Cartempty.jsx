import Box from "../Box"
import Text from "../Text"

function Cartempty() {
  return (
    <>
      {/* Container to center the message vertically and horizontally */}
      <Box className='w-full pt-[40px] text-center justify-center h-screen'>
        {/* Message shown when the cart is empty */}
        <Text className='font-bold text-4xl text-black'>Your cart is Empty</Text>
      </Box>
    </>
  )
}

export default Cartempty
