import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Page1 from './Components/Page1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="page1" element={<Page1 />} />
      </ Routes>
    </BrowserRouter>
  );
}

export default App;