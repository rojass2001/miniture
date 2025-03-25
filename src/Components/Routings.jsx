import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from '../Pages/Home'
import Navbar from "./navbar/Navbar"
const Shop=lazy(()=>import('../Pages/Shop'))
const Contactpage=lazy(()=>import('../Pages/Contactpage'))
import Footer from './Footer'
const Filterpage=lazy(()=>import('../Pages/Filterpage'))
const  Cartpage=lazy(()=>import('../Pages/Cartpage'))
const Aboutpage=lazy(()=>import('./Aboutpage'))
const Productdetail=lazy(()=>import('./Productdetail'))
import Login from "../Pages/Loginorregister/Login"
import Register from "../pages/Loginorregister/Register"
import Loader from '../Loader'



function Routings() {
  return (
    <>
    <Router>
    
    <Navbar/> 
    <Suspense fallback={<Loader/>}>
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
    </Suspense>
    <Footer/>
    

    </Router>  
    </>
  )
}

export default Routings
