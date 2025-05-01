import useAuthentication from "../customhooks/useauth"; // Custom hook for authentication logic
import Box from "./Box"; // Box component for layout and styling
import Button from "./Button"; // Button component for form submission
import Form from "./Form"; // Form component for handling the form structure
import Text from "./Text"; // Text component for displaying text elements

function Contactform() {
  const { contactsubmit } = useAuthentication(); // Destructuring contact submit function from the custom hook

  return (
    <>
      <Box className='w-full bg-slate-100 py-20 px-12 sm:px-1 md:px-2 md:h-screen'>
        {/* Form element with onSubmit handler */}
        <Form className='w-full bg-white px-24 py-14 sm:px-1' onsubmit={contactsubmit}>
          {/* Title for the form */}
          <Text className='font-bold mb-5 text-2xl'>Fill Up The Form</Text>
          <Box className='w-full gap-12 flex sm:flex-col'>
            {/* Name input field */}
            <input
              required
              className='w-[60%] font-bold h-10 border-[1px] border-gray-600 outline-none sm:w-full'
              placeholder='Name'
              type="text"
            />
            {/* Email input field */}
            <input
              required
              className='w-[60%] h-10 font-bold border-[1px] border-gray-600 outline-none sm:w-full'
              type="email"
              placeholder='Email'
            />
          </Box>
          {/* Subject input field */}
          <input
            required
            className="w-full h-10 font-bold mt-5 border-[1px] border-gray-600 outline-none"
            type="text"
            placeholder='Subject'
          />
          {/* Message textarea */}
          <textarea
            required
            className='w-full h-32 border-[1px] mt-10 border-gray-600 outline-none'
            placeholder='Write message here'
          />
          {/* Submit button */}
          <Button type="submit" className='font-bold h-14 text-center px-3 rounded-lg mt-4 text-white bg-blue-950'>
            Submit Request
          </Button>
        </Form>
      </Box>
    </>
  );
}

export default Contactform;
