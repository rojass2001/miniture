
import { Link } from 'react-router-dom'
import { FaLock, } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const button="w-[130px] py-2  rounded-full  text-black border-[1px] border-black font-bold"
const inputcontainer="w-full px-2 flex items-center bg-gray-100"

function Register() {
  return (
    <>
   <form className='w-full h-screen  flex px-2 items-center place-content-center'>
    <div className='md:w-[50%] lg:w-[26%] sm:w-full px-2 pb-4 min-h-[300px] sm:h-auto flex items-center 
      flex-col space-y-6 shadow-md bg-white rounded-3xl shadow-gray-300'>
        <h1 className='font-bold'>Sign Up</h1>
      <div className={inputcontainer} > 
        <FaUser /> <input className='outline-none w-full text-black pl-2 h-12 bg-gray-100'
        placeholder='enter name' type="text"/>
      </div>
      <div className={inputcontainer} > 
        <MdEmail /> <input className='outline-none w-full h-12 pl-2 bg-gray-100' placeholder='enter email' type="email"/>
      </div>
      <div className={inputcontainer} > 
        <FaLock /> <input className='outline-none w-full h-12 pl-2 bg-gray-100' placeholder='enter password' type="password"/>
      </div>
      <button className=' bg-gray-200 rounded-xl w-[50%]  py-2 font-bold'>Register</button>
       <span className='w-full flex gap-2 items-center place-content-center'>
          <Link to="/login"> <button className={button}>signin</button></Link> 
          <button className={`${button} bg-orange-400`}>Signup</button>
        </span>
    </div>
  </form> 
    </>
  )
}

export default Register
