import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Contactus from '../component/Contactus'

function Contact() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
      <Contactus/>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
