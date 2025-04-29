import { useSelector } from 'react-redux'
import Searchbar from './Searchbar'
import Card from './Card'
import Box from './Box'

function Filterdatas() {
    const{filterproducts}=useSelector(state=>state.product)
 return (
  <Box className='w-full'>
   <Searchbar/>
    {filterproducts.length<1?
      <Box className='w-full h-screen text-5xl place-content-start text-center'>No Search Found</Box>
                      :
      <Box className='w-full sm:h-screen overflow-y-auto  mt-12 px-12 mb-4 grid gap-5  grid-cols-4  sm:grid-cols-1 md:grid-cols-3 md:px-3 sm:px-1 '>
          {filterproducts?.map((product)=>(
           <Card product={product} key={product.id}/>
          ))}
      </Box>
    }
  </Box>       
  )
}

export default Filterdatas
