import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Course from '../components/Course'
function Courses() {
  return (
    <>
      <div className="bg-white dark:bg-gray-950 min-h-screen">
        <Navbar />
        <div className='min-h-screen'>
          <Course />
        </div>

        <Footer />
      </div>


    </>
  )
}

export default Courses