/* eslint-disable react/jsx-key */
import kitchen from '../../Mainarray/Kitchenarray'
import { FaCartShopping } from 'react-icons/fa6'
import { HiOutlineHeart } from 'react-icons/hi'
import { productdetailcontain} from '../../redux/Productslice'
import { useDispatch } from 'react-redux'
import { addtocart } from '../../redux/Cartslice'
import { Link } from 'react-router-dom'
const carticons="absolute p-2  rounded-full bg-black  text-white hidden group-hover:block sm:block md:block";
const hover = "transform transition-all duration-300 hover:scale-105"

function Kitchen() {
  const dispatch=useDispatch()
  return (
    <>
  <div className='w-full mt-[90px] sm:mt-[150px] '>
    <h1 className='text-3xl text-center font-bold text-black mb-4'> You  Are   In  Kitchen</h1>
     <div className='w-full   grid grid-cols-4 gap-x-6 gap-y-3 sm:grid-cols-2 sm:gap-x-2 '>
  {kitchen?.map((a)=>(
    <Link to="/productdetail">
      <div onClick={()=> dispatch(productdetailcontain(a))} className={`rounded-2xl group relative
       ${hover} h-[280px] sm:h-[200px] `} key={a.id}>
       <img  className="w-full h-full rounded-3xl "src={a.image}/>
        <div className={`${carticons} top-2 right-2`}> 
         <HiOutlineHeart  size={23}/>
        </div>
         <div className={`${carticons} right-2 bottom-4`}> 
           <FaCartShopping onClick={()=>dispatch(addtocart(a))}  size={23}/>
         </div>
       </div>
      </Link>
     ))}
    </div>
  </div>
    </>
  )
}

export default Kitchen
