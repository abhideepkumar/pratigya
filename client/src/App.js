import React from 'react';
import './App.css';
import Login from './components/login';
import Profile from './components/profile';
import HomePage from './components/HomePage';  // Import the HomePage component
import Community from './components/community'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path='/community' element={<Community/>} />
        <Route path='/HomePage' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
