import './App.css';
import Login from './components/login';
import Profile from './components/profile';
import HomePage from './components/HomePage';  // Import the HomePage component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
