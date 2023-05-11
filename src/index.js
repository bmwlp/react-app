import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Navbar from './Navbar'
import Cart from './Cart'
import Updateadd from './UpdateUser'
import Updatereal from './Updatereal'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/navbar" element={<Navbar />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/update" element={<Updateadd />}/>
    <Route path="/updateadd" element={<Updatereal />}/>
  
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
