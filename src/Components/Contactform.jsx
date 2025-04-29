import useAuthentication from "../customhooks/useauth"
import Box from "./Box"
import Button from "./Button"
import Form from "./Form"
import Text from "./Text"

function Contactform() {
  const{contactsubmit}=useAuthentication()
  return (
    <>
   <Box className='w-full  bg-slate-100 py-20 px-12 sm:px-1 md:px-2 md:h-screen'>
      <Form className='w-full bg-white px-24 py-14 sm:px-1' onsubmit={contactsubmit}>
        <Text className='font-bold mb-5 text-2xl'>Fill Up The Form</Text>
        <Box className='w-full gap-12  flex sm:flex-col'>
         <input required className='w-[60%] font-bold h-10 border-[1px] border-gray-600 outline-none  sm:w-full' placeholder ='Name'type="text"/>
         <input required className='w-[60%] h-10  font-bold border-[1px] border-gray-600 outline-none sm:w-full' type="email" placeholder ='Email'/>
        </Box>
        <input required className="w-full h-10 font-bold mt-5 border-[1px] border-gray-600 outline-none" type="text" placeholder ='Subject'/>
        <textarea required className='w-full h-32 border-[1px] mt-10 border-gray-600 outline-none' placeholder='write message here'/>
        <Button type="submit" className='font-bold h-14 text-center px-3 rounded-lg mt-4 text-white bg-blue-950'>Submit Request</Button>
      </Form>
    </Box>
    </>
  )
}

export default Contactform
