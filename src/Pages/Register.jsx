import { Link } from 'react-router-dom'; // Link for navigation between pages
import { FaLock } from 'react-icons/fa6'; // Lock icon for password input field
import { MdEmail } from 'react-icons/md'; // Email icon for email input field
import { useState } from 'react'; // React hook for managing state
import useAuthentication from '../customhooks/useauth'; // Custom hook for authentication logic
import Form from '../Components/Form'; // Custom form component
import Box from '../Components/Box'; // Custom layout container
import Text from '../Components/Text'; // Text component for styling
import Button from '../Components/Button'; // Button component for actions

// Reusable button and input container styles
const button = "w-[130px] py-2 rounded-full text-black border-[1px] border-black font-bold";
const inputcontainer = "w-full px-2 flex items-center bg-gray-100";

function Register() {
  const [email, setemail] = useState(''); // Manage the email input state
  const [password, setpassword] = useState(''); // Manage the password input state
  const { registersubmit } = useAuthentication(email, password); // Custom hook for handling registration logic
  
  return (
    <Box className='w-full h-screen flex px-2 items-center place-content-center'>
      {/* Form for user registration */}
      <Form 
        className='md:w-[50%] lg:w-[26%] sm:w-full px-2 pb-4 min-h-[300px] sm:h-auto flex items-center 
        flex-col space-y-3 shadow-md bg-white rounded-3xl shadow-gray-300' 
        onsubmit={registersubmit}
      >
        <Text className='font-bold text-3xl'>Sign Up</Text>

        {/* Email input field with MdEmail icon */}
        <Box className={`mb-2 ${inputcontainer}`}>
          <MdEmail /> 
          <input 
            required 
            className='outline-none w-full h-12 pl-2 bg-gray-100' 
            onChange={(e) => setemail(e.target.value)} 
            placeholder='Enter email' 
            type="email"
          />
        </Box>

        {/* Password input field with FaLock icon */}
        <Box className={inputcontainer}>
          <FaLock />
          <input 
            required 
            className='outline-none w-full h-12 pl-2 bg-gray-100' 
            onChange={(e) => setpassword(e.target.value)} 
            placeholder='Enter password' 
            type="password"
          />
        </Box>

        {/* Register button */}
        <Button type='submit' className='bg-gray-200 rounded-xl w-[50%] py-2 font-bold'>Register</Button>

        {/* Navigation to Signin page and Signup button */}
        <span className='w-full flex gap-2 items-center place-content-center'>
          <Link to="/login">
            <Button type="button" className={button}>Signin</Button>
          </Link>
          <Button type="button" className={`${button} bg-orange-400`}>Signup</Button>
        </span>
      </Form>
    </Box> 
  );
}

export default Register;
