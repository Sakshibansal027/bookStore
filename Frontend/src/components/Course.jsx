import React from 'react'
import Cards from './cards'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';


function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:5000/book/course");
        console.log(response.data);
        setBook(response.data);
      }
      catch (error) {
        console.log("Error in fetching book data :", error.message);
      }
    }
    getBook();
  }, [])
  return (
    <div className='max-w-screen-2xl min-h-screen container mx-auto md:px-20 px-4 bg-white dark:bg-gray-950 text-black dark:text-white'>
      <div className="pt-24">
        <div className='mt-30 items-center justify-center text-center space-y-5'>
          <h1 className='text-2xl font-semibold md:text-4xl text-gray-300'>
            We're delighted to have you <span className="text-pink-500">Here</span>! :)
          </h1>
          <p className='text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto'>Welcome to our book store, where stories come alive. Discover a wide range of books across multiple genres, carefully selected to match every mood and interest. From timeless classics to exciting new reads, enjoy reading anytime, anywhere.</p>
          <a className="bg-pink-600 text-white p-2 rounded-md hover:bg-pink-500 duration-300 cursor-pointer px-4 " href="/">Back</a>
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9 mt-10 mb-10 '>
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Course