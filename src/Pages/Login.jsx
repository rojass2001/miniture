
import { Link } from 'react-router-dom'
import { FaLock,  } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'
import useAuth from '../customhooks/useauth'
import Form from '../Components/Form'
const button="w-[130px] py-2  rounded-full  text-black border-[1px] border-black font-bold"
const inputcontainer = "w-full px-2 flex items-center bg-gray-100"

function Login() {
  const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
  const { loginsubmit } = useAuth(email, password)
  
  return (
  <Form className='w-full  h-screen flex px-2 items-center place-content-center' onsubmit={loginsubmit}>
    <div className='md:w-[50%] lg:w-[26%] sm:w-full px-2  py-4 min-h-[300px] sm:h-auto flex items-center 
      flex-col space-y-3  shadow-md bg-white rounded-3xl shadow-gray-300'>
      <h1 className='font-bold'>Signin</h1>
      <div className={`mb-2 ${inputcontainer}`} > 
       <MdEmail /> <input required className='outline-none w-full h-12 pl-2  bg-gray-100'onChange={(e)=>setemail(e.target.value)} placeholder='enter email' type="email"/>
      </div>
      <div className={inputcontainer} > 
       <FaLock /> <input required className='outline-none w-full h-12 pl-2  bg-gray-100' onChange={(e)=>setpassword(e.target.value)} placeholder='enter password' type="password"/>
      </div>
      <Link className='text-black mb-1 text-md font-bold' to="/forget">forgot password?</Link>
      <button type='submit'  className=' bg-gray-200 rounded-xl w-[50%]  py-2 font-bold'>Login</button>
      <span className='w-full flex gap-2 items-center place-content-center'>
        <button   className={`${button} bg-orange-400`}>Signin</button>
        <Link to="/register"> <button className={button}>Signup</button></Link> 
      </span>  
    </div>
  </Form> 
  )
}

export default Login
