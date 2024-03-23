// import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import Home from '../src/pages/home/index'
import { Outlet } from 'react-router-dom';

function App() {
  return (

    <>
      <Outlet />
    </>
  )
}

export default App
