
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import Navbar from './components/Navbar.js';
import Register from './components/Register.js';
import Profile from './components/Profile.js';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path='/Profile' element={<Profile />}/>
      </Routes>
      </Router>
   
    </div>
  );
}


export default App;
