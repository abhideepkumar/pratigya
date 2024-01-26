import './App.css';
import Community from './components/community';
import Login from './components/login';
import Profile from './components/profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/community" element={<Community/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
