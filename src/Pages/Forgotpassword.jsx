import useAuthentication from "../customhooks/useauth";  // Custom hook for authentication actions
import { MdEmail } from "react-icons/md";  // Importing Email icon from react-icons
import Form from "../Components/Form";  // Reusable form component
import Box from "../Components/Box";  // Reusable Box component for layout
import Button from "../Components/Button";  // Reusable button component
import Text from "../Components/Text";  // Reusable text component for typography
import useInput from "../customhooks/useInput";

// Container class for input styling
const inputcontainer = "w-full px-2 flex items-center bg-gray-100";

function Forgotpassword() {
     // useInput hook for managing form state
      const [ values, handleChange ] = useInput ({ email: "" });
      const { resetemail } = useAuthentication (values.email);
      

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
            name="email"  // Name attribute for the input field
            onChange={handleChange}  // Update email state on input change
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
