import React from 'react'
import Home from '../Pages/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from "./navbar/Navbar"
import Shop from '../Pages/Shop'
import Contactpage from '../Pages/Contactpage'
import About from '../Pages/About'
import Footer from './Footer'
import Filterpage from '../Pages/Filterpage'
import Cartpage from '../Pages/Cartpage'
import Price from './Price'
import Login from './Login'
import Searchbar from './Searchbar'
import Aboutpage from './Aboutpage'

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
    <Route path='/login' element={<Login/>}/> 
    
    </Routes> 
    <Footer/>
    </Router>  
    </>
  )
}

export default Routings
