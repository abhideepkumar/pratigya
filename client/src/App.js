import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import Login from './components/login';
import Home from "./components/Home/Home";
import Profile from "./components/profile";
import Community from "./components/community";
import './App.css'; 
import ProfileEditCreate from "./components/profile-edit";

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
        default:console.log("Switch block error")
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/profile-edit" element={<ProfileEditCreate/>}/>
      <Route path="/Community" element={<Community/>}/>

    </Routes>
  );
}
export default App;
