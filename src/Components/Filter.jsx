import { Link } from 'react-router-dom';
import useFilter from '../customhooks/usefilter';
const filter = ["new", "old", "plastic", "wood", "cusion", "metal"]

function Filter() {
  const{data,pricecategory,handlechange}=useFilter()
  return (
  <div className='w-[20%] py-3 bg-white shadow-md pl-2 h-screen shadow-gray-300 sm:w-[40%]'>
      <p className='text-4xl font-bold text-black sm:text-xl'>Filter By   Price</p>
        <div className='flex w-full justify-between '>
          <p>min:$30</p>
          <p>max:$300</p>
        </div>
        <div className='flex justify-between'>
          <input className='accent-slate-950 w-[150px] sm:w-[80px]'   type="range" min={30} max={300} step={1} 
            value={data} onChange={pricecategory}/>
          <p>${data}</p>
        </div>
        <p className='text-2xl font-bold text-black sm:text-xl'>By Category</p>
        <Link to="/shop"><input type="radio"  name="category" /></Link>
          <label className='ml-1 mb-1' >all</label><br/>  
  {
  filter.map((b)=>(
    <>
     <input type="radio" key={b}  name="category"  value={b} onChange={handlechange}  />
     <label className='ml-1 mb-1'  htmlFor={b} >{b}</label><br/>
    </>
    ))}
  </div>
    
  )
}

export default Filter
