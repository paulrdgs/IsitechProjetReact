import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Collection from './Collection';
import Menu from './Menu/Menu.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/connect" element={<Collection />}/>
        <Route path="/collect" element={<Collection />}/>
        <Route path="/search" element={<Collection />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
