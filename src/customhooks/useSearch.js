import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchproducts } from "../redux/Productslice"; // Action to search products

function useSearch() {
    const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
    const navigate = useNavigate(); // Hook to navigate between routes
    const [search, setsearch] = useState(""); // State to hold the current search term

    // Function to update search state as the user types in the input
    const handlechange = (e) => {
        setsearch(e.target.value); // Set the search term when user types
    };

    // Function to handle form submission (when user submits search)
    const submit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        dispatch(searchproducts(search)); // Dispatch the search action to Redux store with the search term
        navigate('/filter'); // Navigate to the /filter page to display the filtered results
    };

    return { search, handlechange, submit }; // Return the state and functions for use in components
}

export default useSearch;
