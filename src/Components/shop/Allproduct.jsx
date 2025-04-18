import  { useEffect } from 'react'
import { allproducts } from '../../Mainarray/Allproducts'
import { useDispatch, useSelector } from 'react-redux'
import Searchbar from '../Searchbar'
import Card from '../Card'
import { setproducts } from '../../redux/Productslice'

function Allproduct() {
     const {allproduct}=useSelector((state)=>state.product)
     const dispatch=useDispatch()
      useEffect(()=>{
        dispatch(setproducts(allproducts))
      },[])
  return (
<>
    <div className='w-full'>
    <Searchbar/>
    <div className='w-full h-screen overflow-y-auto   mt-12 px-12 mb-4 grid grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-3 md:px-3 sm:px-1  ' >
      {
        allproduct?.map((product)=>(
      <Card product={product} key={product.id}/>
        ))}
    </div>
    </div>
</>
  )
}

export default Allproduct
