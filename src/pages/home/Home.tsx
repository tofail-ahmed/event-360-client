import React from 'react'
import Navbar from './Header'
import '../home/Home.css'
import Client from './Client/Client'
import Service from './Service/Service'

import Gallery from './Gallery/Gallery'
import RecentEvent from './event/RecentEvent'
import EventItems from './EventItems/EventItems'
import ClientSay from './ClientSay/ClientSay'
import Pricing from './Pricing/Pricing'

const Home = () => {
  return (
    <div className="homeBg">
      <Navbar></Navbar>
      <Service></Service>
      <div>
        <Client></Client>
        <EventItems></EventItems>
        <Gallery></Gallery>
        <RecentEvent></RecentEvent>
        <Pricing></Pricing>
        <ClientSay></ClientSay>
      </div>
    </div>
  );
}

export default Home