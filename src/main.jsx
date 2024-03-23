import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

import Home from '../src/pages/home/index'
import About from '../src/pages/about/about'
import Work1 from '../src/pages/works/work1'
import Work2 from '../src/pages/works/work2'
import Work3 from '../src/pages/works/work3'
import Work4 from '../src/pages/works/work4'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "reto",
    element: <Work1 />,
  },
  {
    path: "rallway",
    element: <Work2 />,
  },
  {
    path: "vote",
    element: <Work3 />,
  },
  {
    path: "viewsonic",
    element: <Work4 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>,
)
