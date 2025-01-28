import React from 'react'
import Navbar from '../Components/navbar/Navbar'
import Categories from '../Components/home/Categories'
import Banner from '../Components/home/Banner'
import Kitchen from '../Components/home/Kitchen'
import Topselling from '../Components/home/Topselling'
import Service from '../Components/home/Service/Service'

function Home() {
  return (
    <>
    <div className='w-full mt-[80px] px-12 sm:px-1 md:px-5 '>
     
     <Banner/>
    <Categories/>
    <Kitchen/>
    <Topselling/>
    <Service/>
    </div>
    </>
  )
}

export default Home
