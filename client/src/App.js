
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login.js";
import Navbar from './components/pages/Navbar.js';
import Register from './components/pages/Register.js';
import Profile from './components/pages/Profile.js';
import { UserProvider } from './context/userContext';


function App() {
  return (
    <div className="App">
       <UserProvider>
      <Router>
      <Navbar />

      <Routes>
        <Route path='/'  element={<Login />}/>
        <Route path='/register.js' element={<Register />}/>
        <Route path='/profile.js' element={<Profile />}/>
      </Routes>
      </Router>
      </UserProvider>
    </div>
  );
}


export default App;
