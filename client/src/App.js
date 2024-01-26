// App.js
import React from 'react';
import Login from './components/login';
import Profile from './components/profile';
import HomePage from './components/HomePage';  // Import the HomePage component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<HomePage />} />  {/* Add this line for the HomePage */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
