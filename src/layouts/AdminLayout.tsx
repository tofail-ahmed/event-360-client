import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../component/SideBar'

const AdminLayout = () => {
  return (
    <div className='flex'>
     <div className='flex-2/5 bg-green-400 '> <SideBar></SideBar></div>
      <div className='flex-3/5 bg-red-400 w-full'><Outlet/></div>
    </div>
  )
}

export default AdminLayout