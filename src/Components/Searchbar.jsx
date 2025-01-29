import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { searchproducts } from '../redux/Productslice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
function Searchbar() {
  const[search,setsearch]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const submit=(e)=>{
    e.preventDefault()
  dispatch(searchproducts(search)) 
  navigate('/filter')
} 
  
  return (
    
   <div className='w-full h-8  bg-white place-items-end pr-5 '>
    <form className='flex h-8 gap-1 items-center' onSubmit={submit}>
      <input className='w-[150px] h-7 rounded-full pl-2 border-[1px] text-sm border-black sm:w-[120px]' 
      placeholder='search products' value={search}  onChange={(e)=>setsearch(e.target.value)} type="text"/>
      <button type="submit" className='bg-sky-500 w-14 h-7 text-sm rounded-full'>Search</button>
       </form>
       </div>
    
  )
}

export default Searchbar
