import Filter from '../Filter'
import Allproduct from './Allproduct'

function Products() {
 
  return (
  <>
    <div className='w-full flex py-3 mt-[80px]'>
      <Filter/>
      <Allproduct/>
    </div>
  </>
  )
}

export default Products
