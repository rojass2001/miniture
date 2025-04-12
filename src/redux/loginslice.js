import { createSlice} from "@reduxjs/toolkit"
import { toast } from "react-toastify";
const INITIAL_STATE={
    login:false
   
};
const loginslice= createSlice({
    name: "login",
    initialState: INITIAL_STATE,
    reducers: {
        setlogin: () => {
            const login=JSON.parse(localStorage.getItem("login"))
            if (login === false||null) {
                localStorage.setItem("login",true)
            }
            
        },
        setlogout: () => {
            const login = JSON.parse(localStorage.getItem("login"))
            console.log(login)
            if (login===true) {
                 localStorage.setItem("login",false)
               toast.success("sucessfully logout")
            }
            else {
                 toast.warning("please login first")
            }
            
        },
    }
})
export const { setlogin,setlogout} = loginslice.actions
export default loginslice.reducer
