import React from 'react'
import "./Loginorregister.css"
import { registerpopup } from '../redux/Popup'
import { useDispatch, useSelector } from 'react-redux'
function Login() {
  const dispatch=useDispatch()
  return (
    <>
    <div className='w-full h-screen place-content-center place-items-center'>
  <form className='w-[22%]  h-[280px] justify-center  px-3 bg-white  border-2
  rounded-3xl border-gray-500 place-content-center  text-center sm:w-[80%] md:w-[35%]  '>
    <input className='input ' placeholder='Your email' type="email"/>
    <input className='input' placeholder="your password" required type="password"/>
    <p className='text-sm text-start font-bold'>forget password?</p>
    <p onClick={()=>dispatch(registerpopup())}className='text-sm 
    font-bold cursor-pointer '>You dont Have Account <span className='underline'>Register</span></p>
    <button className='w-[120px] h-10 text-white bg-blue-950 '>Login</button>
  </form>
       </div>
       </>
  )
}

export default Login
