import React from 'react'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'

function Home() {
  return (
    <div className='bg-white dark:bg-gray-800 dark:text-white'>
      <Navbar/>
      <IntroSection/>
    </div>
  )
}

export default Home