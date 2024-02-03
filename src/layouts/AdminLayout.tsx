import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../component/SideBar';

const AdminLayout = () => {
  return (
    <div className='flex'>
      <div className='w-1/6 bg-green-400'>
        <SideBar></SideBar>
      </div>
      <div className='w-5/6 bg-red-400'>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
