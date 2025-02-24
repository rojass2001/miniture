import { FaLock } from "react-icons/fa"
import { IoIosContact } from "react-icons/io"
import { Link } from "react-router-dom"

function Loginorregister({des,buttonname,link}) {
    return (
      <div className=' w-full min-h-screen pb-5 px-2 pt-[120px] place-content-center place-items-center '>
      <form className='sm:w-full md:w-[50%] lg:w-[23%]  space-y-3 border-[5px] border-black
      place-content-center rounded-lg text-black min-h-[330px]   p-3'>
      <label className='font-bold '>Enter Email</label>
     <div className="w-full flex  items-center h-14 pr-1 place-content-center border-2 border-black">
      <IoIosContact className="mt-1 text-black"size={29}/>
       <input placeholder='enter your username @gmail.com'className='w-full outline-none mt-1 h-12 md:h-9'/></div>
      <label className='font-bold'>Enter password</label>
      <div className="w-full flex gap-1  items-center h-14 pr-1 place-content-center border-2 border-black">
      <FaLock className="mt-1 text-black"size={20}/>
      <input type="password"placeholder='enter your password'className='w-full  outline-none mt-1 h-12 md:h-9'/>  
      </div>
      <p className="font-bold">forget password?</p>
    <Link to={link}> <p className='text-sm text-black font-bold underline text-center mt-2'>{des}</p></Link>
     <div className='w-full mt-2 text-center'>
      <button className=' px-8 py-2 font-bold text-white bg-blue-900 '>{buttonname}</button>
      </div>
      </form>
        
      </div>
    )
  }
  
  export default Loginorregister