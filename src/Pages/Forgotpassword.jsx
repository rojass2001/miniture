import { useState } from "react"
import useAuthentication from "../customhooks/useauth"
import { MdEmail } from "react-icons/md"
import Form from "../Components/Form"
import Box from "../Components/Box"
import Button from "../Components/Button"
import Text from "../Components/Text"
const inputcontainer = "w-full px-2 flex items-center bg-gray-100"

function Forgotpassword() {
    const [email, setemail] = useState('')
    const { resetemail } = useAuthentication(email)
  return (
  <Box className='w-full  h-screen flex px-2 items-center place-content-center' >
     <Form className='md:w-[50%] lg:w-[26%] sm:w-full px-2 pb-4 min-h-[300px] sm:h-auto flex items-center 
         place-content-center flex-col space-y-6 shadow-md bg-white rounded-3xl shadow-gray-300' onsubmit={resetemail} >
        <Text className="font-bold text-black text-3xl ">Reset password</Text>
        <Box className={inputcontainer} > 
          <MdEmail /> <input required className='outline-none w-full h-12 pl-2  bg-gray-100'onChange={(e)=>setemail(e.target.value)} placeholder='enter email' type="email"/>
        </Box>
        <Button type="submit" className="p-2 bg-orange-400" onClick={resetemail}>Reset password</Button>
     </Form>
  </Box> 
  )
}

export default Forgotpassword
