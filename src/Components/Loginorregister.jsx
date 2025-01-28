import React from 'react'
import Login from './Login'
import Register from './Register'
import { useSelector } from 'react-redux'

function Loginorregister() {
    const {login}=useSelector(state=>state.popup)
  return (
    <>
    <div className='w-full  fixed z-10 top-2 h-screen place-content-center place-items-center'>
    {login?
    <Login/>:<Register/>
    }
    </div>
    
    </>
  )
}

export default Loginorregister
