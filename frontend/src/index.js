// React 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Redux 
import { Provider } from "react-redux";
import { store } from "./services/store/store";
// Pages 
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Profil from './pages/Profile';
import Error from './pages/Error';
// Components 
import Footer from './Components/Footer';
// Style 
import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Profil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </Provider>
);


