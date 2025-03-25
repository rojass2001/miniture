
import Categorygrid from './Categorygrid'
const Livingroom="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/living_room.jpg?raw=true"
  const Bedroom="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/bed_room.jpg?raw=true"
  const Kitchen="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/kids_room.jpg?raw=true"
  const kidsroom="//github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/kitchen.jpg?raw=true"

function Categories() {
  const hover="transform transition-all duration-300 hover:scale-105"
  return (
<div className='w-full '>
    <div className='w-full flex gap-3 mt-5  px-2 sm:flex-col sm:h-auto  '>
      <Categorygrid catname="Living Room" image={Livingroom} width="w-1/3" height="h-[250px]"/>
      <Categorygrid catname="Bed Room" image={Bedroom} width="w-1/3" height="h-[250px]"/>
  <div className={`w-1/3  rounded-2xl ${hover}  h-[250px] sm:h-[480px] gap-3 flex flex-col sm:w-full  `}>
     <Categorygrid catname="Kitchen" image={Kitchen}width="w-full" height="h-[45%]"/>
     <Categorygrid catname="Kids Room" image={kidsroom}width="w-full" height="h-[45%]"/>

  </div>
 </div> 
 </div>
  
  )
}

export default Categories
