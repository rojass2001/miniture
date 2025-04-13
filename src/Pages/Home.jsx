import { lazy, Suspense, useEffect } from 'react'
import Cookies from 'js-cookie'
import Banner from '../Components/home/Banner'
const Categories=lazy(()=>import('../Components/home/Categories'))
const Kitchen =lazy(()=>import('../Components/home/Kitchen'))
const Topselling=lazy(()=>import( '../Components/home/Topselling'))
import Service from '../Components/home/Service/Service'
import Loader from '../Loader'

function Home() {
  //useEffect(() => {
   // console.log(JSON.parse(Cookies.get('login')))
   // console.log(Cookies.get('login', JSON.stringify(false), { expires: 7 }))
  //},[])
  return (
    <>
    <div className='w-full mt-[80px] px-12 sm:px-1 md:px-5 '>
      <Suspense fallback={<Loader/>}>
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
