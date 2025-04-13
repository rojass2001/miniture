
import Cookies from 'js-cookie';
import Cart from '../Components/cart/Cart'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Cartpage() {
  //const { login } = useSelector(state => state.login)
  const login =JSON.parse(Cookies.get('login'))
  
  const navigate=useNavigate()
  useEffect(() => {
    console.log(login)
    if (login===false||null) {
      toast.warning("please login")
      navigate('/login')
    }
    
  },[])
  return (
    <>
    <Cart/>
    </>
  )
}

export default Cartpage
