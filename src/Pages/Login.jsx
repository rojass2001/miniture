import { Link } from 'react-router-dom'; 
import { FaLock } from 'react-icons/fa6'; // Lock icon for password input
import { MdEmail } from 'react-icons/md'; // Email icon for email input
import useAuthentication from '../customhooks/useauth'; // Custom hook for authentication logic
import Form from '../Components/Form'; // Custom Form component
import Box from '../Components/Box'; // Custom Box component for layout
import Text from '../Components/Text'; // Custom Text component for text styling
import Button from '../Components/Button'; // Custom Button component
import useInput from '../customhooks/useInput';

const button = "w-[130px] py-2  rounded-full  text-black border-[1px] border-black font-bold"; // Reusable button style
const inputcontainer = "w-full px-2 flex items-center bg-gray-100"; // Style for input containers

function Login() {
   // useInput hook for managing form state
  const [values, handleChange] = useInput({ email: "", password: "" });
  const { loginsubmit } = useAuthentication(values.email, values.password); // Custom hook for handling login submit
  
  return (
    <Box className='w-full  h-screen flex px-2 items-center place-content-center'>
      {/* Form for user login */}
      <Form 
        className='md:w-[50%] lg:w-[26%] sm:w-full px-2  py-4 min-h-[300px] sm:h-auto flex items-center flex-col space-y-3 shadow-md bg-white rounded-3xl shadow-gray-300' 
        onsubmit={loginsubmit}
      >
        <Text className='font-bold text-3xl'>Signin</Text>

        {/* Email input field with an icon */}
        <Box className={`mb-2 ${inputcontainer}`} > 
          <MdEmail /> 
          <input 
            required 
            className='outline-none w-full h-12 pl-2  bg-gray-100'
            name="email"
            onChange={handleChange} 
            placeholder='Enter email' 
            type="email"
          />
        </Box>

        {/* Password input field with an icon */}
        <Box className={inputcontainer}> 
          <FaLock /> 
          <input 
            required 
            className='outline-none w-full h-12 pl-2  bg-gray-100'
            name="password"
            onChange={handleChange} 
            placeholder='Enter password' 
            type="password"
          />
        </Box>

        {/* Link to the Forgot Password page */}
        <Link className='text-black mb-1 text-md font-bold' to="/forget">Forgot password?</Link>

        {/* Login button */}
        <Button type='submit' className='bg-gray-200 rounded-xl w-[50%] py-2 font-bold'>Login</Button>

        {/* Section for Signin and Signup buttons */}
        <span className='w-full flex gap-2 items-center place-content-center'>
          <Button type="button" className={`${button} bg-orange-400`}>Signin</Button>
          <Link to="/register">
            <Button type="button" className={button}>Signup</Button>
          </Link>
        </span>  
      </Form>
    </Box> 
  );
}

export default Login;
