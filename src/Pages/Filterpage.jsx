import React from 'react'
import Filter from '../Components/Filter'
import Filterdatas from '../Components/Filterdatas'
function Filterpage() {
  return (
    <>
   
   
    <div className='w-full flex gap-1 mt-[80px]'>
    <Filter/>
    <Filterdatas/>   
    </div>
    </>
  )
}

export default Filterpage
