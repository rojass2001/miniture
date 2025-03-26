import Filter from '../Components/Filter'
import Filterdatas from '../Components/Filterdatas'
function Filterpage() {
  return (
   <>
      <div className='w-full flex mt-[80px]'>
        <Filter/>
        <Filterdatas/>   
      </div>
  </>
  )
}

export default Filterpage
