<<<<<<< HEAD
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
=======
import './App.css';
import Login from './components/login';
import Community from './components/community';
import Profile from './components/profile';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> 8c58ceb9b2ab0b964ca16d6c434a8cc6f69b6de9

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="/dashboard" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> 8c58ceb9b2ab0b964ca16d6c434a8cc6f69b6de9
  );
}
export default App;
