import React from 'react'
function Categories() {
  const hover="transform transition-all duration-300 hover:scale-105"
  return (
    <>
    <div className='w-full '>
    <div className='w-full flex gap-3 mt-5  px-2 sm:flex-col sm:h-auto  '>

     <div className={`w-1/3 relative  bg-slate-300 rounded-2xl ${hover} h-[250px] sm:w-full`} >
      <div  className="w-[30%]  absolute bg-white rounded-lg bottom-2 font-semibold left-2 text-center">Living Room</div>
       <img className="w-full h-full rounded-2xl "src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/living_room.jpg?raw=true"/>
     </div> 
     <div className={`w-1/3 relative bg-slate-300 rounded-2xl ${hover} h-[250px] sm:w-full`}>
       <div  className="w-[30%]  absolute bg-white rounded-lg bottom-2 font-semibold left-2 text-center">Bed Room</div>
       <img className="w-full h-full rounded-2xl "src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/bed_room.jpg?raw=true"/>
     </div>
     <div className={`w-1/3  rounded-2xl ${hover}  h-[250px] gap-3 flex flex-col sm:w-full  `}>
      <div className={`w-full h-[45%] relative ${hover} sm:h-full rounded-2xl`}  >
        <div className="w-[30%]  absolute bg-white rounded-lg bottom-2 font-semibold left-2 text-center">Kids Room</div>
        <img className="w-full h-full rounded-2xl "src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/kids_room.jpg?raw=true" alt="ggfg"/>
   
      </div>
     <div className={`w-full h-[45%] relative ${hover}  sm:h-full rounded-2xl`}  >
        <div className="w-[30%]  absolute bg-white rounded-lg bottom-2 font-semibold left-2 text-center">Kitchen</div>
        <img className="w-full h-full rounded-2xl "src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/kitchen.jpg?raw=true" alt="ggfg"/>
   
      </div>
     </div> 

    </div>
  
    </div>

    </>
  )
}

export default Categories
