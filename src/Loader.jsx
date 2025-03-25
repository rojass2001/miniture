
import { PulseLoader } from 'react-spinners'
function Loader() {
  return (
    <div className='w-full flex items-center place-content-center'>
      <PulseLoader color="black" size={24}/>
    </div>
  )
}

export default Loader