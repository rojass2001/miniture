
import Home from '../Pages/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from "./navbar/Navbar"
import Shop from '../Pages/Shop'
import Contactpage from '../Pages/Contactpage'
import Footer from './Footer'
import Filterpage from '../Pages/Filterpage'
import Cartpage from '../Pages/Cartpage'
import Aboutpage from './Aboutpage'
import Productdetail from './Productdetail'
import Login from  "../Pages/Loginorregister/Login"
import Register from "../pages/Loginorregister/Register"

function Routings() {
  return (
    <>
    <Router>
    <Navbar/> 
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/Furniture' element={<Home/>}/> 
    <Route path='/shop' element={<Shop/>}/> 
    <Route path='/contact' element={<Contactpage/>}/> 
    <Route path='/about' element={<Aboutpage/>}/> 
    <Route path='/filter' element={<Filterpage/>}/> 
    <Route path='/cart' element={<Cartpage/>}/> 
    <Route path='/productdetail' element={<Productdetail/>}/> 
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Routes> 
    <Footer/>
    </Router>  
    </>
  )
}

export default Routings
