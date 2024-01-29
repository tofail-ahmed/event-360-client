import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home.tsx';

import Blog from './pages/blog/Blog.tsx';
import MainLayout from './layouts/MainLayout.tsx';
import Contact from './pages/contact/Contact.tsx';
import About from './pages/about/About.tsx';
import AdminLayout from './layouts/AdminLayout.tsx';
import Dashboard from './pages/dashboard/Dashboard.tsx';
import NotFound from "../NotFound.tsx"
import Review from './pages/review/Review.tsx';
import Event from './pages/event/Event.tsx';
import Service from './pages/service/Service.tsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"about",
        element:<About></About>,
       
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:"contact",
        element:<Contact></Contact>
      }

    ]
  },
  {
    path:'/admin',
    element:<AdminLayout></AdminLayout>,
    children:[
      {
        index:true,
        element:<Navigate to={"/admin/dashboard"}/>
      },
      {
        path:"dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path:"service",
        element:<Service></Service>
      },
      {
        path:'review',
        element:<Review />
      },
      {
        path:"event",
        element:<Event/>
      }
    ]
  },
 
  {
    path: '*',
    element: <NotFound />
  } 
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
