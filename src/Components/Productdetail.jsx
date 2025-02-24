
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../redux/Cartslice'
import {increase,decrease } from '../redux/Productslice'
function Productdetail() {
  const {productdetails}=useSelector(state=>state.product)
 const dispatch=useDispatch()
  return (
<>
    <div className='w-full min-h-screen mt-5 place-content-center  justify-center  place-items-center sm:px-1'>
     <div className=' w-[50%] min-h-[300px] py-2  relative flex gap-3
       mx-auto shadow-md bg-white shadow-gray-400 sm:flex-col sm:w-full 
        md:min-h-[380px] md:w-[70%]'>
        <div className='h-[300px]  w-[50%]  sm:w-full'>
          <img className='h-full w-full ' src={productdetails?.image}/>
        </div>
           <div className='w-[60%] sm:w-full sm:text-center sm:place-items-center font-bold text-black pt-3'>
              <h5 className='font-bold'>{productdetails.name}</h5>
              <p >{productdetails?.des}</p>
              <p className=' text-xl '>${productdetails?.price}</p>
              <p className='text-green-400 text-sm'>{productdetails.stocks}</p>
              <div className=" w-full flex  sm:justify-center ">
                <button onClick={()=>dispatch(decrease())} className='w-16 border-[1px] h-9 border-gray-300 mr-2'>-</button>
               <span className='text-xl mt-1'> {productdetails.quantity}</span>
                <button onClick={()=>dispatch(increase())} className='w-16 border-[1px] h-9 border-gray-300 ml-2'>+</button>
              </div>
              <div className='flex gap-2 mt-4 sm:gap-4 text-center place-items-start sm:place-items-center sm:justify-center '>
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
