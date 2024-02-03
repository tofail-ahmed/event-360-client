import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../component/SideBar';

const AdminLayout = () => {
  return (
    <div className='grid grid-cols-12'>
     
        <SideBar></SideBar>
      
      <div className='bg-red-200/90 col-span-10 h-full px-6'>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
