import React from 'react'
import ContactBanner from '../Components/ContactBanner'
import Footer from '../Components/Footer'
import ContactSection from '../Components/ContactSection'
import Address from '../Components/Address'

const Contact = () => {
  return (
    <div>
      <ContactBanner/>
      <ContactSection/>
      <Address/>
      <Footer/>
    </div>
  )
}

export default Contact