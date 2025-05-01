import Box from '../../Box'
import Text from '../../Text'
import { services } from './Servicearray'

const hover = "transform transition-all duration-300 hover:scale-105"

function Service() {
  return (
    <>
      {/* Heading for the Services section */}
      <Box className='w-full text-center'>
        <Text className='text-3xl text-black font-bold'>Our Services</Text>
      </Box>

      {/* Grid layout for displaying service cards */}
      <Box className='w-full shadow-md shadow-gray-300 bg-gray-100 py-5 px-3 grid gap-3 grid-cols-3 md:grid-cols-3 sm:grid-cols-1'>
        {services.map((a) => (
          // Individual service card with icon, title, and description
          <Box
            key={a.title}
            className={`h-[120px] font-bold flex bg-white ${hover} justify-between p-2 shadow-md shadow-gray-300 gap-2`}
          >
            <Box className='text-black h-full'>{a.icon}</Box>

            <Box>
              <Text>{a.title}</Text>
              <Text>{a.des}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Service
