import { lazy, Suspense } from 'react'; 
// Lazy load the components to optimize performance
const Banner = lazy(() => import('../Components/home/Banner'));
const Categories = lazy(() => import('../Components/home/Categories/Categories'));
const Kitchen = lazy(() => import('../Components/home/Kitchen'));
const Topselling = lazy(() => import('../Components/home/Topselling'));
const Service = lazy(() => import('../Components/home/Service/Service'));
import Loader from '../Loader'; // Fallback loader component while the components are loading
import Box from '../Components/Box'; // Layout component for styling and layout

function Home() {
  return (
    <Box className='w-full mt-[80px] px-12 sm:px-1 md:px-5'>
      {/* Suspense is used to wrap lazy-loaded components. It shows a fallback (Loader) until the components are ready */}
      <Suspense fallback={<Loader />}>
        <Banner /> {/* Banner component */}
        <Categories /> {/* Categories section */}
        <Kitchen /> {/* Kitchen section */}
        <Topselling /> {/* Topselling section */}
        <Service /> {/* Service section */}
      </Suspense>
    </Box>
  );
}

export default Home;
