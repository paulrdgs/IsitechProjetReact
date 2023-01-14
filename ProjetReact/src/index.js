import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Collection from './Collection';
import Menu from './Menu/Menu.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MyAppContextProvider } from './store/appContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyAppContextProvider>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/connect" element={<Collection />} />
        <Route path="/collect" element={<Collection />} />
        <Route path="/search" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  </MyAppContextProvider>
);
