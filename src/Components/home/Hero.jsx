import { MdOutlineChair } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
  <div className='w-full  py-2'>
    <div className='flex items-center text-black'>
      <div className=" bg-orange-400 flex items-center place-content-center rounded-full
        hover:bg-red-600 w-12  h-9 sm:w-16 sm:h-12 text-white"><MdOutlineChair className=''size={32}/>
      </div> 
        <p className='text-4xl mb-2 font-bold '>Eleveate Your Lifestyle</p>
    </div>
    <p className='text-4xl text-black font-bold '>With Our Furniture</p>
     <div className='flex gap-3 font-bold'>
        <p className='text-4xl text-black  '>Creation</p>
        <Link className='no-underline' to="/shop">
        <div className=' bg-orange-400 flex items-center text-white text-center place-content-center w-[150px] h-10'>Shop Now</div>
        </Link>
     </div>
  </div>
   </>
  )
}

export default Hero
