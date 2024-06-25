import React from 'react';
// import Homes from './homes/Homes';
import { default as Home } from './homes/Homes';
import {  Navigate, Route, Routes } from "react-router-dom";
import Coursess from './courses/Course';
import Signup from './component/Signup';
import About from './about/About';
import Contact from './contact/Contact';
import { useAuth } from './context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [authUser,setAuthUser] = useAuth()
	console.log(authUser)

  return (
   
     <div className='"bg-customDark dark:text-white">'>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={authUser ? <Coursess /> :<Navigate to ="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        
        
      </Routes>
      <ToastContainer />
     </div>
    
  );
}

export default App;



