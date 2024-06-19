import React from 'react'
import Navbar from '../component/Navbar'
import Course from '../component/Courses'
import Footer from '../component/Footer'


function Coursess() {


  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <Course/>
     
      </div>
      
      <Footer/>
    </>
  )
}

export default Coursess
