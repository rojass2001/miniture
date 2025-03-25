import { lazy, Suspense } from 'react'
import Banner from '../Components/home/Banner'
import Categories from '../Components/home/Categories'
import Kitchen from '../Components/home/Kitchen'
import Topselling from '../Components/home/Topselling'
import Service from '../Components/home/Service/Service'




function Home() {
  return (
    <>
    
    <div className='w-full mt-[80px] px-12 sm:px-1 md:px-5 '>
    <Suspense fallback={<p>hfhfhfhfh</p>}>
     <Banner/>
    <Categories/>
    <Kitchen/>
   
    <Topselling/>
    <Service/>
    </Suspense>
    </div>
    </>
  )
}

export default Home
