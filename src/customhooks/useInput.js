
import { useState } from 'react';

// Custom hook to handle form input state
export default function useInput(initialState) {
  // Set up state to store input values
  const [values, setValues] = useState(initialState);

  // Return current values and a change handler function
  return [
    values,
    (event) => {
      // Update the specific field value based on input name
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    }
  ];
}
