import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../redux/Cartslice'
import {increase,decrease } from '../redux/Productslice'
import { productpopup} from '../redux/Popup'
function Productdetail() {
  const {productdetails}=useSelector(state=>state.product)
 const dispatch=useDispatch()
  return (
<>
    <div className='w-full min-h-screen overflow-y-auto place-content-center absolute top-1 justify-center  place-items-center sm:px-1'>
      <div className=' w-[50%] min-h-[300px] overflow-y-auto  p-2 relative flex gap-3
       mx-auto shadow-md bg-white shadow-gray-400 sm:flex-col sm:w-full  md:h-[380px] md:w-[70%]  '>
        <p onClick={()=>dispatch(productpopup())} className=' text-2xl font-bold absolute top-1
         right-3 sm:top-0 cursor-pointer bg-white'>x</p>
        <div className='h-[300px] w-[50%] sm:w-full'>
          <img className='h-full w-full ' src={productdetails?.image}/>
        </div>
           <div className='w-[60%] sm:w-full sm:text-center sm:place-items-center font-bold text-black pt-3'>
              <h5 className='font-bold'>{productdetails.name}</h5>
              <p >{productdetails?.des}</p>
              <p className=' text-xl '>${productdetails?.price}</p>
              <p className='text-green-400 text-sm'>{productdetails.stocks}</p>
              <div className='flex items-center '>
                <button onClick={()=>dispatch(decrease())} className='w-16 border-[1px] h-9 border-gray-300 mr-2'>-</button>
                {productdetails.quantity}
                <button onClick={()=>dispatch(increase())} className='w-16 border-[1px] h-9 border-gray-300 ml-2'>+</button>
              </div>
              <div className='flex gap-2 mt-4 sm:gap-4 text-center place-items-center justify-center'>
                <button onClick={()=>dispatch(addtocart(productdetails))} className='w-[120px] h-10 bg-orange-400 '>Addtocart</button>
                <button className='w-[120px] h-10 bg-orange-400 '>PayNow${productdetails.price*productdetails.quantity}</button>
              </div>
            </div>
       </div>
    </div>
</>
  )
}

export default Productdetail
