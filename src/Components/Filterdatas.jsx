import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import Searchbar from './Searchbar'
import { addtocart } from '../redux/Cartslice'
import { productdetailcontain } from '../redux/Productslice'
import { Link } from 'react-router-dom'
 const hover="transform transition-all duration-300 hover:scale-105"
function Filterdatas() {
    const{filterproducts}=useSelector(state=>state.product)
    const dispatch=useDispatch()
  return (
    <>
    <div className='w-full'>
      <Searchbar/>
      {filterproducts.length<1?
      <div className='w-full h-screen text-5xl place-content-start text-center'>No Search Found</div>
:<div className='w-full sm:h-screen overflow-y-auto  mt-12 px-12 mb-4 grid gap-5  grid-cols-4  sm:grid-cols-1 md:grid-cols-3 md:px-3 sm:px-1 '>
             {
             filterproducts?.map((a)=>(
           <Link className='no-underline' to="/productdetail" key={a.id}><div className={`h-[250px] group rounded-3xl 
            relative text-center bg-white text-black shadow-md shadow-gray-300 ${hover} `} 
              onClick={()=>dispatch(productdetailcontain(a))}>
                 <img className='  rounded-t-3xl  w-full h-[50%]' src={a.image}/>
                 <p className='font-bold'>{a.name}</p>
                 <p className='font-bold'>${a.price}</p>
                 <div className='absolute bottom-2 rounded-full p-2
                  bg-black text-white right-1 hidden group-hover:block
                   sm:block md:block'><FaCartShopping onClick={()=>dispatch(addtocart(a))}/></div>
               </div>
               </Link>
               ))}
           </div>
           }
           </div>
           </>
  )
}

export default Filterdatas
