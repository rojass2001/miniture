// Import necessary modules from React and React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Import components and pages
import Home from '../Pages/Home'
import Navbar from "./navbar/Navbar"
import Login from "../Pages/Login"
import Register from '../Pages/Register'
import Loader from '../Loader'
import Forgotpassword from '../Pages/Forgotpassword'

// Lazy load components for better performance
const Shop = lazy(() => import('../Pages/Shop'))
const Contactpage = lazy(() => import('../Pages/Contactpage'))
const Footer = lazy(() => import('./Footer'))
const Filterpage = lazy(() => import('../Pages/Filterpage'))
const Cartpage = lazy(() => import('../Pages/Cartpage'))
const About = lazy(() => import('../pages/About'))
const Productdetail = lazy(() => import('./Productdetail'))

function Routings() {
  return (
    <>
      {/* Wrap application in Router for routing support */}
      <Router>
        {/* Navbar is placed outside Suspense so it's always visible */}
        <Navbar />
        
        {/* Suspense wraps all lazy-loaded components to show a fallback while loading */}
        <Suspense fallback={<Loader />}>
          {/* Define application routes */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/miniture' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contactpage />} />
            <Route path='/about' element={<About />} />
            <Route path='/filter' element={<Filterpage />} />
            <Route path='/cart' element={<Cartpage />} />
            <Route path='/productdetail' element={<Productdetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forget' element={<Forgotpassword />} />
          </Routes>
        </Suspense>

        {/* Footer is placed after routes and wrapped in Suspense for lazy loading */}
        <Footer />
      </Router>
    </>
  )
}

export default Routings // Export the main routing component
