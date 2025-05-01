import { useState } from "react";  // Importing useState for managing email state
import useAuthentication from "../customhooks/useauth";  // Custom hook for authentication actions
import { MdEmail } from "react-icons/md";  // Importing Email icon from react-icons
import Form from "../Components/Form";  // Reusable form component
import Box from "../Components/Box";  // Reusable Box component for layout
import Button from "../Components/Button";  // Reusable button component
import Text from "../Components/Text";  // Reusable text component for typography

// Container class for input styling
const inputcontainer = "w-full px-2 flex items-center bg-gray-100";

function Forgotpassword() {
    // State for managing the email entered by the user
    const [email, setemail] = useState('');
    
    // Destructure the resetemail function from the custom useAuthentication hook
    const { resetemail } = useAuthentication(email);

  return (
    <Box className='w-full h-screen flex px-2 items-center place-content-center'>
      <Form 
        className='md:w-[50%] lg:w-[26%] sm:w-full px-2 pb-4 min-h-[300px] sm:h-auto flex items-center 
        place-content-center flex-col space-y-6 shadow-md bg-white rounded-3xl shadow-gray-300' 
        onsubmit={resetemail} // On form submit, trigger resetemail function
      >
        {/* Title Text */}
        <Text className="font-bold text-black text-3xl">Reset password</Text>

        {/* Input for email */}
        <Box className={inputcontainer}>
          <MdEmail /> {/* Email icon */}
          <input
            required
            className='outline-none w-full h-12 pl-2 bg-gray-100'
            onChange={(e) => setemail(e.target.value)}  // Update email state on input change
            placeholder='enter email'
            type="email"
          />
        </Box>

        {/* Reset password button */}
        <Button type="submit" className="p-2 bg-orange-400" onClick={resetemail}>
          Reset password
        </Button>
      </Form>
    </Box>
  );
}

export default Forgotpassword;
