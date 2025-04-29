import { Link } from 'react-router-dom';
import useFilter from '../customhooks/usefilter';
import Box from './Box';
import Text from './Text';
const filter = ["new", "old", "plastic", "wood", "cusion", "metal"]

function Filter() {
  const{data,pricecategory,handlechange}=useFilter()
  return (
  <Box className='w-[20%] py-3 bg-white shadow-md pl-2 h-screen shadow-gray-300 sm:w-[40%]'>
    <Text className='text-4xl font-bold text-black sm:text-xl'>Filter By   Price</Text>
      <Box className='flex w-full justify-between '>
        <Text>min:$30</Text>
        <Text>max:$300</Text>
      </Box>
      <Box className='flex justify-between'>
        <input className='accent-slate-950 w-[150px] sm:w-[80px]' type="range" min={30} max={300} step={1} value={data} onChange={pricecategory}/>
        <Text>${data}</Text>
      </Box>
        <Text className='text-2xl font-bold text-black sm:text-xl'>By Category</Text>
        <Link to="/shop"><input type="radio"  name="category" /></Link>
          <label className='ml-1 mb-1' >all</label><br/>  
    {
     filter.map((b)=>(
      <Box key={b}>
        <input type="radio"  name="category"  value={b} onChange={handlechange}  />
        <label className='ml-1 mb-1'  htmlFor={b} >{b}</label><br/>
      </Box>
    ))}
  </Box>
    
  )
}

export default Filter
