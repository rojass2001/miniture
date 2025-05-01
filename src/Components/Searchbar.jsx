import Form from './Form'; // Form component to handle form submission
import useSearch from '../customhooks/useSearch'; // Custom hook to manage search logic
import Box from './Box'; // Layout container component
import Button from './Button'; // Button component for the search button

function Searchbar() {
  // Destructuring values and functions from the useSearch custom hook
  const { submit, handlechange, search } = useSearch(); 

  return (
    <Box className='w-full h-8 bg-white place-items-end pr-5'>
      {/* Form to handle search submission */}
      <Form className='flex h-8 gap-1 items-center' onsubmit={submit}>
        {/* Search input field */}
        <input 
          className='w-[150px] h-7 rounded-full pl-2 border-[1px] text-sm border-black sm:w-[120px]' 
          placeholder='search products' 
          value={search} // Controlled input, bound to search state
          onChange={handlechange} // Handles input changes and updates the state
          type="text"
        />
        {/* Search button */}
        <Button type="submit" className='bg-sky-500 w-14 h-7 text-sm rounded-full'>
          Search
        </Button>
      </Form>
    </Box>
  );
}

export default Searchbar;
