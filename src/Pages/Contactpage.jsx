// Import necessary components
import Pageheading from '../Components/Pageheading'
import Contactform from '../Components/Contactform'

function Contactpage() {
  return (
    <>
      {/* Render the page heading with the title "Contact" */}
      <Pageheading head="Contact" />

      {/* Render the contact form */}
      <Contactform />
    </>
  )
}

export default Contactpage // Export the contact page component
