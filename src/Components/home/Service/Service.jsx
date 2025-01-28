import React from 'react'
import { services } from './Servicearray'
const hover="transform transition-all duration-300 hover:scale-105"
function Service() {
  return (
    <>
    <div className='w-full text-center'>
    <p className='text-3xl text-black font-bold'>Our Services</p>
    </div>
    <div className='w-full shadow-md shadow-gray-300 bg-gray-100 py-5 px-3   grid gap-3  grid-cols-3 md:grid-cols-3  sm:grid-cols-1 '>
    {services.map((a)=>(
    <div className={`h-[120px] font-bold flex bg-white ${hover}  justify-between p-2
     shadow-md shadow-gray-300 gap-2`}key={a.title}>
    <div className='text-black  h-full '>{a.icon}</div>
    <div>
    <p>{a.title}</p>
    <p>{a.des}</p>
    </div>
    </div>
    ))}
    </div>
    </>
  )
}

export default Service
