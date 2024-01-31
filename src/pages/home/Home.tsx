import React from 'react'
import Navbar from './Header'
import '../home/Home.css'
import Client from './Client/Client'
import Service from './Service/Service'
import Event from './event/Event'
import Gallery from './Gallery/Gallery'
import RecentEvent from '../event/RecentEvent'
const Home = () => {
  return (
    <div className="homeBg">
      <Navbar></Navbar>
      <Service></Service>
      <div>
        <Client></Client>
        <Event></Event>
        <Gallery></Gallery>
        <RecentEvent></RecentEvent>
      </div>
    </div>
  );
}

export default Home