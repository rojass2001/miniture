import topproduct from '../../Mainarray/Topselarray'
import Card from '../Card'

function Topselling() {
  return (
  <>
  <div className='w-full mt-[50px]'>
    <h1 className='font-bold text-3xl  text-black text-center'>Our Top Selling</h1>
    <div className='w-full grid grid-cols-4 py-3 rounded-3xl bg-gray-50 gap-x-4 gap-y-5 sm:grid-cols-2 sm:gap-x-2'>
        {topproduct?.map((a)=>(
          <Card product={a} key={a.id}/>
          ))}
    </div>
  </div>
  </>
  )
}

export default Topselling
