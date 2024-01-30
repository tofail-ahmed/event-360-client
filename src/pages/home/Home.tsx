import React from 'react'
import Navbar from './Header'
import '../home/Home.css'
import Client from './Client/Client'
const Home = () => {
  return (
    <div className='homeBg'>
      <Navbar></Navbar>
      <Client></Client>
    </div>
  )
}

export default Home