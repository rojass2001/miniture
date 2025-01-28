import React from 'react';
import Pageheading from './Pageheading';

const Aboutpage = () => {
  return (
    <>
    < Pageheading head="About us"/>
    <div className='w-full flex sm:flex-col p-3'>
     <div className='w-[50%] sm:w-full'>
      <h2 className='text-black font-bold'>Our Agency Story</h2>
      <p className='font-bold text-xl'>Check out our company story and work process</p>
      <div className='text-black'>
      Furniture e-commerce has revolutionized how people buy and sell 
      products, offering a convenient and efficient shopping experience
       through digital platforms. This process encompasses the entire journey, from browsing and selection to purchase and deliver
      </div>
     </div>
     <img className=' w-[50%]  h-[400px] sm:w-full' 
     src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/kids_room.jpg?raw=true"/>
    </div>
    
    </>
              
  )
};

export default Aboutpage
