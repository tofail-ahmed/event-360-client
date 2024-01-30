import React from 'react'
import Navbar from './Header'
import '../home/Home.css'
import Client from './Client/Client'
import Service from './Service/Service'
const Home = () => {
  return (
    <div className='homeBg'>
      <Navbar></Navbar>
      <Client></Client>
      <Service></Service>
     
    </div>
  )
}

export default Home