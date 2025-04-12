import React from 'react'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <>
     <Navbar pageName={"Home"}/>
     <div className='flex justify-center items-center min-h-screen bg-gradient-to-b from-cyan-500 to-pink-300'>
        <h1 className='font-bold shadow-'>loading</h1>
     </div>
    </> 
  )
}

export default Home