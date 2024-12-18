import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Screens/Home'
import Journey from './Screens/Journey';
import JourneyBlog from './Screens/JourneyBlog';
import Project from './Screens/Project';
import Navbar from '../components/navbar';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/journey",
    element: <Journey />,
  },
  {
    path: "/blog",
    element: <JourneyBlog />,
  },
  {
    path: "/project",
    element: <Project />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Navbar/>
  </React.StrictMode>,
)
