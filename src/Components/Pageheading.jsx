
function Pageheading({ head }) {
  
  return (
    <>
    <div className='w-full relative h-[300px] mt-[60px] sm:h-[200px]'>
      <img className='w-full h-full' src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/page_header.jpeg?raw=true"/>
   <div className='font-bold absolute bottom-12 left-6 text-black'>
    <h1 className='font-bold'>{head}</h1>
   </div>
    </div>
    </>
  )
}

export default Pageheading
