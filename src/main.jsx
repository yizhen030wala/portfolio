import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Home from '../src/pages/home/index'
import About from '../src/pages/about/about'
import Work1 from '../src/pages/works/work1'
import Work2 from '../src/pages/works/work2'
import Work3 from '../src/pages/works/work3'
import Work4 from '../src/pages/works/work4'
import Work5 from '../src/pages/works/work5'
import Work6 from '../src/pages/works/work6'
import Work7 from '../src/pages/works/work7'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <App />,
    children: [
      {
        path: "/portfolio/",
        element: <Home />,
      },
      {
        path: "/portfolio/about",
        element: <About />,
      },
      {
        path: "/portfolio/reto",
        element: <Work1 />,
      },
      {
        path: "/portfolio/rallway",
        element: <Work2 />,
      },
      {
        path: "/portfolio/vote",
        element: <Work3 />,
      },
      {
        path: "/portfolio/viewsonic",
        element: <Work4 />,
      },
      {
        path: "/portfolio/島島阿學",
        element: <Work5 />,
      },
      {
        path: "/portfolio/X1pro",
        element: <Work6 />,
      },
      {
        path: "/portfolio/OsteoCloud",
        element: <Work7 />,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
