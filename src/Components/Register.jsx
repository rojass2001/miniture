import React from 'react'
import "./Loginorregister.css"
import { registerpopup } from '../redux/Popup'
import { useDispatch } from 'react-redux'
function Register() {
    const dispatch=useDispatch()
  return (
    <>
    <div className='w-full h-screen place-content-center place-items-center'>
  <form className='w-[22%]  h-[280px] py-4 justify-center place-content-center px-3 bg-white  border-2
  rounded-3xl border-gray-500  text-center sm:w-[80%] md:w-[35%] '>
    <input className='input ' placeholder='Your email' required type="email"/>
    <input className='input' placeholder="your password" required type="password"/>
    <p className='text-sm font-bold text-start'>forget password?</p>
    <p onClick={()=>dispatch(registerpopup())} className='text-sm cursor-pointer 
    font-bold'>You already Have Account <span className='underline'>Login</span></p>
    <button className='w-[120px] h-10 text-white bg-blue-950 '>Register</button>
  </form>
       </div>
       </>
  )
}

export default Register