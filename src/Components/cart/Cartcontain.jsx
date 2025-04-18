import { FaTrash } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { cartincrease,cartdecrease, removecart } from '../../redux/Cartslice'

function Cartcontain() {
  const dispatch=useDispatch()
  const { cartproducts} = useSelector(state => state.cart)
  return (
    <>
      <div className='w-[75%]  mt-3 sm:w-full'>
        { cartproducts?.map((b)=>(
    <div className='w-full  bg-white p-2 shadow-md shadow-gray-400  mb-3 flex gap-3 h-[200px]  ' key={b.id}>
        <img className='h-full w-[30%] sm:w-[50%] ' src={b.image}/>
      <div className='w-[70%] bg-white  flex flex-col space-y-2 text-black font-bold sm:w-[50%]'>
        <h4 className='font-bold' >{b.name}</h4>
        <h4 className='font-bold text-xl'>${b.price}</h4>
        
        <div className='flex mt-2  items-center'>
          <button onClick={()=>dispatch(cartdecrease(b.id))} className='w-14 h-7 bg-white border-2 mr-2
        border-gray-300'>-</button>{b.quantity}
          <button onClick={()=>dispatch(cartincrease(b.id))} className='w-14 h-7 bg-white border-2 ml-2
        border-gray-300'>+</button>
        </div>
        <h6 className='text-md font-bold'>Subtotal:${b.subtotal}</h6>
        <FaTrash onClick={()=>dispatch(removecart(b))} className='ml-3' />
      </div>
    </div>
    ))}
      </div>
   
    </>
  )
}

export default Cartcontain
