import { Link } from 'react-router-dom'
import { FaLock, } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'
import useAuthentication from '../customhooks/useauth'
import Form from '../Components/Form'
import Box from '../Components/Box'
import Text from '../Components/Text'
import Button from '../Components/Button'
const button="w-[130px] py-2  rounded-full  text-black border-[1px] border-black font-bold"
const inputcontainer="w-full px-2 flex items-center bg-gray-100"

function Register() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const { registersubmit } = useAuthentication(email, password)
  return (
  <Box className='w-full h-screen  flex px-2 items-center place-content-center' >
    <Form className='md:w-[50%] lg:w-[26%] sm:w-full px-2 pb-4 min-h-[300px] sm:h-auto flex items-center 
        flex-col space-y-3 shadow-md bg-white rounded-3xl shadow-gray-300' onsubmit={registersubmit}>
        <Text className='font-bold text-3xl'>Sign Up</Text>
        <Box className={`mb-2 ${inputcontainer}`} > 
          <MdEmail /> <input required  className='outline-none w-full h-12 pl-2 bg-gray-100' onChange={(e)=>setemail(e.target.value)} placeholder='enter email' type="email"/>
        </Box>
        <Box className={inputcontainer} > 
          <FaLock /><input required className='outline-none w-full h-12 pl-2 bg-gray-100' onChange={(e)=>setpassword(e.target.value)} placeholder='enter password' type="password"/>
        </Box>
        <Button type='submit' className=' bg-gray-200 rounded-xl w-[50%]  py-2 font-bold'>Register</Button>
        <span className='w-full flex gap-2 items-center place-content-center'>
            <Link to="/login"> <Button type="button"  className={button}>Signin</Button></Link> 
            <Button type="button" className={`${button} bg-orange-400`}>Signup</Button>
          </span>
    </Form>
  </Box> 
  )
}

export default Register
