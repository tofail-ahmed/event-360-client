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

import DashBoardRecentEvent from './pages/dashboard/DashBoardRecentEvent/DashBoardRecentEvent.tsx';
import DashBoardEvents from './pages/dashboard/DashBoardEvents/DashBoardEvents.tsx';
import DashBoardService from './pages/dashboard/DashBoardService/DashBoardService.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddService from './pages/dashboard/DashBoardService/AddService.tsx';
import UpdateService from './pages/dashboard/DashBoardService/UpdateService.tsx';
import DashBoardReviews from "./pages/dashboard/DashBoardReviews/DashBoardReviews.tsx";
import AddReviews from "./pages/dashboard/DashBoardReviews/AddReviews.tsx";
import AddDashBoardEvents from "./pages/dashboard/DashBoardEvents/AddDashBoardEvents.tsx";
import AddRecentEvents from './pages/dashboard/DashBoardRecentEvent/AddRecentEvents.tsx';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <Navigate to={"/admin/dashboard"} />,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "service",
        element: <DashBoardService></DashBoardService>,
      },
      {
        path: "addservice",
        element: <AddService></AddService>,
      },
      {
        path: "updateservice/:id",
        element: <UpdateService></UpdateService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "review",
        element: <DashBoardReviews></DashBoardReviews>,
      },
      {
        path: "addreview",
        element: <AddReviews></AddReviews>,
      },
      {
        path: "event",
        element: <DashBoardEvents></DashBoardEvents>,
      },
      {
        path: "addevent",
        element: <AddDashBoardEvents></AddDashBoardEvents>,
      },
      {
        path: "recentEvent",
        element: <DashBoardRecentEvent></DashBoardRecentEvent>,
      },
      {
        path: "addrecentevent",
        element: <AddRecentEvents></AddRecentEvents>,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
