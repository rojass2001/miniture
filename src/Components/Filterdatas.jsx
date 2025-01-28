import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import Searchbar from './Searchbar'
import { addtocart } from '../redux/Cartslice'
 const hover="transform transition-all duration-300 hover:scale-105"
function Filterdatas() {
    const{filterproducts}=useSelector(state=>state.product)
    const dispatch=useDispatch()
  return (
    <>
    <div className='w-full'>
      <Searchbar/>
      {filterproducts.length<1?
      <div className='w-full h-screen text-5xl place-content-start text-center'>No Search Found</div>:
<div className='w-full h-screen overflow-y-auto px-12 mb-4 grid grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-1 sm:px-0' >
             {
             filterproducts?.map((a)=>(
            <div className={`h-[250px] group rounded-3xl relative text-center
               bg-white shadow-md shadow-gray-300 ${hover} `} key={a.id}>
                 <img className='  rounded-t-3xl  w-full h-[50%]' src={a.image}/>
                 <p className='font-bold'>{a.name}</p>
                 <p className='font-bold'>${a.price}</p>
                 <div className='absolute bottom-2 rounded-full p-2
                  bg-black text-white right-1 hidden group-hover:block
                   sm:block md:block'><FaCartShopping onClick={()=>dispatch(addtocart(a))}/></div>
               </div>
               ))}
           </div>
           }
           </div>
           </>
  )
}

export default Filterdatas
