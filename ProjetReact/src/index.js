import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Collection from './Collection/Collection';
import Connexion from './Connexion/Connexion';
import Menu from './Menu/Menu.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MyAppContextProvider } from './store/appContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyAppContextProvider>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/connect" element={<Connexion />} />
        <Route path="/collect" element={<Collection />} />
        <Route path="/search" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  </MyAppContextProvider>
);
