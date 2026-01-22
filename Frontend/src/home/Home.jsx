import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/banner'
import Freebook from '../components/Freebook'
import Footer from '../components/footer'
function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white">
      <div className="h-16">
        <Navbar/>
    </div>
      <Banner />
      <Freebook />
      <Footer />
    </div>
  )
}

export default Home