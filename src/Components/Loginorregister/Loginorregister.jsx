import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
function Loginorregister({buttonname,des,link}) {
    
  return (
    <div className='w-full p-4 min-h-screen bg-gray-100 place-content-center place-items-center'>
      <div className='w-[23%] place-content-center p-2 font-bold border-[4px] border-blue-900 shadow-md shadow-gray-300
       bg-white min-h-[250px] space-y-2 text-blue-900 rounded-lg sm:w-full md:w-[50%] md:min-h-[350px]'>
       <label for="uname">Enter Name</label>
       <input className="border-2 h-10 w-full border-blue-900" name="uname" placeholder='enter username'/>
       <label for="pass">Enter Password</label>
       <input name="pass"className='border-2 h-10 w-full  border-blue-900'  placeholder='enter password'/>
       <p className='text-sm'>forget password?</p>
       <Link to={link}><p className='text-sm text-center text-blue-900 mt-2'>{des}</p></Link>
       <div className='w-full text-center text-white'>
        <button  className='w-[110px] bg-blue-950 h-9'>{buttonname}</button>
        </div>
      </div>
    </div>
  )
}
export default Loginorregister