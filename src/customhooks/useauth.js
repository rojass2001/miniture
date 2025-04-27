import { createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Backend/Firebase/Firebase"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setlogin } from "../redux/loginslice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
export default function useAuth(email, password) {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const registersubmit = async (event) => {
         event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Success! user created
                const user = userCredential.user;
                toast.success("User created succesfully", user.email);
               
            }).catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    toast.error("This email is already registered. Try logging in instead.");
                    
                } else {
                    console.error("Error creating user:", error.message);
                }
            })
    }


    const loginsubmit = async (event) => {
        event.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast.success("successfully login")
            dispatch(setlogin())
            navigate('/shop')
     
            } catch {
                       toast.error("invalid username or password")
                     }
    }
    const resetemail = (event) => {
    event.preventDefault()
    sendPasswordResetEmail(auth, email)
       .then(() => {
           toast.success("successfully send link to email please check your email")
        }).catch(() => {
            toast.error("please enter valid email")
       });
    }
    const cartauthentication = async() => {
         const login = Cookies.get('login') ? await JSON.parse(Cookies.get('login')) : null;
            console.log(login)
            if (!login) {
                navigate('/login')
                toast.warning("please login")
            }
      
    }
        const logout =async () => {
        const login = Cookies.get('login') ? await JSON.parse(Cookies.get('login')) : null;
            if (login === true) {
            Cookies.set('login', JSON.stringify(false),{ expires: 7});
                toast.success("sucessfully logout");
            }
            else {
                toast.warning("please first login");
                }
        }

    return{registersubmit,loginsubmit,resetemail,cartauthentication,logout}
}




