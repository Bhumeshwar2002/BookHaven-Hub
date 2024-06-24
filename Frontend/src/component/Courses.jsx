import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Cards from './cards';
import {Link} from "react-router-dom"
import axios from "axios"
function Courses() {
 
  const [book , setBook]= useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book")
        setBook(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[]);

  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className=' md:mt-20 item-center justify-center text-center '>
          
          <h1 className='txt-2xl  md:text-4xl '>We're delighted to have you  <span className='text-pink-500'>Here!</span> </h1>
          <p className='md:mt-10 mt-20'> Unlock the treasures of knowledge with our premium collection of books. Dive into captivating stories, gain valuable insights, and expand your horizons with our carefully curated selection. Elevate your reading experience and embark on a journey of discovery with us! Dive into a realm of knowledge and imagination with our premium collection of books. Our library is a treasure trove of wisdom, offering a diverse range of genres and topics to satisfy every reader's curiosity. From gripping tales to insightful explorations, there's something here for everyone. Begin your journey of discovery today!

 </p>
        <Link to="/">
        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 mt-5'>back</button>
        </Link>
          
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Courses
