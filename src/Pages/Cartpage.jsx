import Cart from '../Components/cart/Cart'
import { useEffect } from 'react'
import useAuth from '../customhooks/useauth';

function Cartpage() {
    const{cartauthentication}=useAuth()
    useEffect(() => {
      cartauthentication()
    }, [])
  return (
    <>
     <Cart/>
    </>
  )
}

export default Cartpage
