import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pricefilter, productfilter } from "../redux/Productslice"; // Importing the actions

function useFilter() {
    const [data, setdata] = useState(30); // State to track the selected price category
    const navigate = useNavigate(); // Hook to navigate between routes
    const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

    // Function to handle price category selection
    const pricecategory = (event) => {
        setdata(event.target.value); // Update the local state with the selected price
        dispatch(pricefilter(event.target.value)); // Dispatch the pricefilter action to the store
        navigate('/filter'); // Navigate to the /filter page
    };

    // Function to handle product filter selection
    const handlechange = (event) => {
        dispatch(productfilter(event.target.value)); // Dispatch the productfilter action to the store
        navigate('/filter'); // Navigate to the /filter page
    };

    return { pricecategory, data, handlechange }; // Return the functions and state to be used in the component
}

export default useFilter;
