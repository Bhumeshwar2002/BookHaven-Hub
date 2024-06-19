import React from 'react'
import Aboutus from '../component/Aboutus'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

function About() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <Aboutus/>
     
      </div>
      
      <Footer/>
    </>
  )
}

export default About
