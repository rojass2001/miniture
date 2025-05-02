import Cart from '../Components/cart/Cart'; // Importing the Cart component that displays the shopping cart items
import { useEffect } from 'react'; // useEffect hook to perform side effects in the component
import useAuth from '../customhooks/useauth'; // Custom hook for authentication logic

function Cartpage() {
    // Extracting cartauthentication function from the useAuth hook to check user authentication
    const { cartauthentication } = useAuth();

    // useEffect hook runs once after the initial render to authenticate the user for the cart page
    useEffect(() => {
      cartauthentication(); // Ensuring that the user is authenticated before viewing the cart
    }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <>
     {/* Rendering the Cart component to show the cart items */}
     <Cart/>
    </>
  );
}

export default Cartpage;
