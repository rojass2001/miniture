import  { useEffect } from 'react'
import { allproducts } from '../../Mainarray/Allproducts'
import { useDispatch, useSelector } from 'react-redux'
import { FaCartShopping, FaStar } from 'react-icons/fa6'
import { setproducts,productdetailcontain } from '../../redux/Productslice'
import { addtocart } from '../../redux/Cartslice'
import Searchbar from '../Searchbar'
import { Link } from 'react-router-dom'
 const hover="transform transition-all duration-300 hover:scale-105"
function Allproduct() {
     const {allproduct}=useSelector((state)=>state.product)
     const productfill=()=>{
      dispatch(setproducts(allproducts))
     }
   
     const dispatch=useDispatch()
      useEffect(()=>{
        productfill()
},[])
  return (
<>
    <div className='w-full'>
    <Searchbar/>
    <div className='w-full h-screen overflow-y-auto   mt-12 px-12 mb-4 grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-3 md:px-3 sm:px-0  ' >
      {
        allproduct?.map((a)=>(
      <Link className='no-underline' to="/productdetail" key={a.id} >  
     <div  onClick={()=>dispatch(productdetailcontain(a))}className={`h-[250px] group rounded-3xl relative place-items-center
      text-center bg-white shadow-md text-black shadow-gray-300 ${hover} `}>
          <img className='  rounded-t-3xl  w-full h-[50%]' src={a.image}/>
          <p className='font-bold'>{a.name}</p>
          <p className='font-bold'>${a.price}</p>
          <div className='flex items-center'><FaStar/>{a.rate}</div>
          <div onClick={()=>dispatch(addtocart(a))} className='absolute bottom-2 rounded-full p-2 
           bg-black text-white right-1 hidden group-hover:block sm:block md:block'><FaCartShopping />
          </div>
      </div>
      </Link> 
        ))}
    </div>
    </div>
</>
  )
}

export default Allproduct
