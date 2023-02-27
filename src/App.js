import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <div className='bg-teal-100 App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Home" element={<Home />} />
        </ Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;