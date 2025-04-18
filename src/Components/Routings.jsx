import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from '../Pages/Home'
import Navbar from "./navbar/Navbar"
const Shop=lazy(()=>import('../Pages/Shop'))
const Contactpage=lazy(()=>import('../Pages/Contactpage'))
const Footer=lazy(()=>import('./Footer'))
const Filterpage=lazy(()=>import('../Pages/Filterpage'))
const  Cartpage=lazy(()=>import('../Pages/Cartpage'))
const About=lazy(()=>import('../pages/About'))
const Productdetail=lazy(()=>import('./Productdetail'))
import Login from "../Pages/Login"
import Register from '../Pages/Register'
import Loader from '../Loader'
import Forgotpassword from '../Pages/Forgotpassword'

function Routings() {
  return (
    <>
  <Router>
      <Navbar/>
      <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/miniture' element={<Home/>}/> 
            <Route path='/shop' element={<Shop/>}/> 
            <Route path='/contact' element={<Contactpage/>}/> 
            <Route path='/about' element={<About/>}/> 
            <Route path='/filter' element={<Filterpage/>}/> 
            <Route path='/cart' element={<Cartpage/>}/> 
            <Route path='/productdetail' element={<Productdetail/>}/> 
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register />} />   
            <Route path='/forget' element={<Forgotpassword/>}/>  
          </Routes> 
        </Suspense>
        <Footer/>
  </Router>  
    </>
  )
}

export default Routings
