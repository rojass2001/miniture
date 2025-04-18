import Carousel from 'react-bootstrap/Carousel';

 function Sliders() {
  return (
    <>
   <div className='w-full  h-[300px] mt-5  '>
        <Carousel className='w-full  h-full'>
        <Carousel.Item>
        
          <img className="h-[300px] w-full"src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/slider-2.jpeg?raw=true"/>
        </Carousel.Item>
        <Carousel.Item>
          
        <img className="w-full h-[300px]" src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/slider-1.jpeg?raw=true"/>
        </Carousel.Item>
      
        <Carousel.Item>
        <img className="h-[300px] w-full" src="https://github.com/MdSamsadAli/miniture/blob/main/public/images/miniture/slider-3.jpeg?raw=true"/>
        </Carousel.Item>
      </Carousel>
   </div> 
    </>
  )
}

export default Sliders
