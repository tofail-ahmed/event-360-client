import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
      <nav className='flex flex-col gap-4'>
            <button className='px-4 py-2 bg-blue-600 hover:bg-blue-800/10 text-white rounded-sm mx-auto truncate'><NavLink to={"/"}>Home</NavLink></button>
            <button className='px-4 py-2 bg-blue-600 hover:bg-blue-800/10 text-white rounded-sm mx-auto truncate'><NavLink to={"/admin/service"}>Services</NavLink></button>
            <button className='px-4 py-2 bg-blue-600 hover:bg-blue-800/10 text-white rounded-sm mx-auto truncate'><NavLink to={"/admin/event"}>Events</NavLink></button>
            <button className='px-4 py-2 bg-blue-600 hover:bg-blue-800/10 text-white rounded-sm mx-auto truncate'><NavLink to={"/admin/recentEvent"}>Recent Events</NavLink></button>
            <button className='px-4 py-2 bg-blue-600 hover:bg-blue-800/10 text-white rounded-sm mx-auto truncate'><NavLink to={"/admin/review"}>Reviews</NavLink></button>
      </nav>
    </div>
  )
}

export default SideBar