
const quicklinks=["My Account","Shopping Cart","Wishlist", "Product Compare",]
const ourstore=["Miniture is one of the biggest international fashion companies, one of the world’s largest distribution groups."]
const Information=["Privacy Policy", "Refund Policy", "Shipping & Return", "Terms & Condition",]
const gettouch=["Sign Up For Our newsletter and receive 10% off your"]
function Footer() {
  return (
    <>
<footer className='w-full mt-3 bg-blue-950 px-4 grid grid-cols-4 gap-3 sm:grid-cols-2 sm:px-1'> 
  <div className='h-[250px] text-white font-bold'>
    <p className='text-2xl '>Our  store</p>
    {ourstore.map((a)=>(
    <><p key={a}>{a}</p></>
    ))}
  </div> 
  <div className='h-[250px] font-bold text-white'>
        <p className='text-2xl '>Quick Links</p>
        {quicklinks.map((b)=>(
        <><p key={b}>{b}</p></>
        ))}
  </div>
  <div className='h-[250px] text-white font-bold'>
        <p className='text-2xl   '>Information</p>
        {Information.map((c)=>(
        <><p key={c}>{c}</p></>
        ))}
  </div>
  <div className='h-[250px] text-white font-bold'>
        <p className='text-2xl '>Lets Get In Touch</p>
        {gettouch.map((d)=>(
        <><p key={d}>{d}</p></>
        ))}
  </div>
</footer>
    </>
  )
}

export default Footer
