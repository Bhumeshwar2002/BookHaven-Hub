import React from 'react';
// import Homes from './homes/Homes';
import { default as Home } from './homes/Homes';
import {  Route, Routes } from "react-router-dom";
import Coursess from './courses/Course';
import Signup from './component/Signup';
import About from './about/About';
import Contact from './contact/Contact';


function App() {
  return (
   
     <div className='"bg-customDark dark:text-white">'>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Coursess />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        
        
      </Routes>
     </div>
    
  );
}

export default App;
