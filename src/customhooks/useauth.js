import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth"; // Firebase authentication methods for creating users, signing in, and resetting passwords
import { auth } from "../Backend/Firebase/Firebase"; // Import Firebase authentication configuration
import { useNavigate } from "react-router-dom"; // For navigating between pages
import { toast } from "react-toastify"; // For showing notifications to the user
import Cookies from "js-cookie"; // For handling cookies to manage user session

export default function useAuthentication(email, password) {
    const navigate = useNavigate(); // Hook to navigate to different pages
    
   // Register a new user
   const registersubmit = async (e) => {
         e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success(`User created successfully ${email}`);
                navigate('/login'); // Redirect to login page after successful registration
            }).catch((error) => {
                // Handle errors during user creation
                if (error.code === 'auth/email-already-in-use') {
                    toast.error("This email is already registered. Try logging in instead.");
                } else {
                    toast.error("password must atleast 6 characters");
                }
            });
    };

   // User login function
    const loginsubmit = async (e) => {
        e.preventDefault();
        try {
            // Attempt user login
            await signInWithEmailAndPassword(auth, email, password);
            Cookies.set('login', JSON.stringify(true), { expires: 7 }); // Set login cookie to true for 7 days
            toast.success("Login successful");
            navigate('/'); // Redirect to the shop page after successful login
        } catch {
            toast.error("Invalid username or password");
        }
    };

   // Password reset function
    const resetemail = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset link sent to email. Please check your inbox.");
            }).catch(() => {
                toast.error("Please enter a valid email address.");
            });
    };

  const cartauthentication = async () => {
    const login = Cookies.get('login') ? JSON.parse(Cookies.get('login')) : null
    if (!login) {
      toast.warning("Please log in")
      navigate('/login')
    } else {
      navigate("/cart")
    }
  }

  // Log out the user and clear login cookies
  const logout = async () => {
    const login = Cookies.get('login') ? JSON.parse(Cookies.get('login')) : null
    if (login === true) {
      Cookies.set('login', JSON.stringify(false), { expires: 7 })
      toast.success("Successfully logged out");
      navigate('/login') // Redirect to login page after logout
    } else {
      toast.warning("Please log in first");
      navigate('/login') // Redirect to login page if not logged in
    }
  }
   // Contact form submission function
    const contactsubmit = (e) => {
        e.preventDefault();
        toast.success("Message submitted successfully.");
    };

   // Return all the functions for use in components
    return { registersubmit, loginsubmit, resetemail, contactsubmit, cartauthentication, logout };
}
