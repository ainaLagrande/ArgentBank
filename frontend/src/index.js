import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "./css/style.css";
import NavBar from './Components/Nav';
import Homepage from './pages/Homepage';
import Footer from './Components/Footer';
import Login from './pages/Login';
import Profil from './pages/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
