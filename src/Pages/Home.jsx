import { lazy, Suspense, } from 'react'
const Banner=lazy(()=>import('../Components/home/Banner'))
const Categories=lazy(()=>import('../Components/home/Categories/Categories'))
const Kitchen =lazy(()=>import('../Components/home/Kitchen'))
const Topselling=lazy(()=>import( '../Components/home/Topselling'))
import Service from '../Components/home/Service/Service'
import Loader from '../Loader'
import Box from '../Components/Box'

function Home() {
  
  return (
    <>
  <Box className='w-full mt-[80px] px-12 sm:px-1 md:px-5 '>
    <Suspense fallback={<Loader/>}>
       <Banner/>
       <Categories/>
       <Kitchen/>
       <Topselling/>
       <Service/>
    </Suspense>
  </Box>
    </>
  )
}

export default Home
