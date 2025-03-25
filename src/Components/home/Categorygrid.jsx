import { memo } from "react"

/* eslint-disable react/prop-types */
 const hover="transform transition-all duration-300 hover:scale-105"
function Categorygrid({catname,image,height,width}) {
  return (
    <>
<div className={`${width} relative  bg-slate-300 rounded-2xl ${hover} ${height} sm:w-full`} >
  <div className="w-[30%]  absolute bg-white rounded-lg bottom-2 font-semibold left-2 text-center">{catname}</div>
    <img className="w-full h-full rounded-2xl "src={image}/>
</div> 
    </>
  )
}

export default memo(Categorygrid)
