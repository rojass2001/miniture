import React from 'react'
const quicklinks=["My Account","Shopping Cart","Wishlist", "Product Compare",]
const ourstore=["Miniture is one of the biggest international fashion companies, one of the world’s largest distribution groups."]
const Information=["Privacy Policy", "Refund Policy", "Shipping & Return", "Terms & Condition",]
const gettouch=["Sign Up For Our newsletter and receive 10% off your"]
function Footer() {
  return (
    <>
<div className='w-full mt-3 bg-blue-950 px-4 grid grid-cols-4 gap-3 sm:grid-cols-2 sm:px-0'> 
  <div className='h-[250px] text-white'>
    <p className='text-2xl font-bold'>Our  store</p>
    {ourstore.map((a,i)=>(
    <><p key={i}>{a}</p></>
    ))}
  </div> 
  <div className='h-[250px] text-white'>
        <p className='text-2xl font-bold'>Quick Links</p>
        {quicklinks.map((b,ind)=>(
        <><p key={ind}>{b}</p></>
        ))}
  </div>
  <div className='h-[250px] text-white'>
        <p className='text-2xl font-bold inline '>Information</p>
        {Information.map((c,inde)=>(
        <><p key={inde}>{c}</p></>
        ))}
  </div>
  <div className='h-[250px] text-white'>
        <p className='text-2xl font-bold'>Let's Get In Touch</p>
        {gettouch.map((d,index)=>(
        <><p key={index}>{d}</p></>
        ))}
  </div>
</div>
    </>
  )
}

export default Footer
