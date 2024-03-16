import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Screens/Home'
import Journey from './Screens/Journey';
import JourneyBlog from './Screens/JourneyBlog';
import Project from './Screens/Project';



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
  </React.StrictMode>,
)
