/* eslint-disable react/prop-types */
import { memo } from "react"
import Box from "../../Box"

const hover = "transform transition-all duration-300 hover:scale-105"

function Categorygrid({ catname, image, height, width }) {
  return (
    <>
      {/* Container for a single category block with hover effect */}
      <Box className={`${width} relative bg-slate-300 rounded-2xl ${hover} ${height} sm:w-full`}>

        {/* Label box positioned at bottom-left of image */}
        <Box className="w-[30%] absolute bg-white rounded-lg bottom-2 font-semibold left-2 text-center">
          {catname}
        </Box>

        {/* Category image as background */}
        <img className="w-full h-full rounded-2xl" src={image} alt={catname} />

      </Box>
    </>
  )
}

// Using memo to prevent unnecessary re-renders
export default memo(Categorygrid)
