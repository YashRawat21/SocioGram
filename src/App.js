
import './App.css';
import EditProfile from './pages/editProfile/EditProfile';
import Login from './pages/login/Login';
import ProfileComp from './pages/profile/ProfileComp';
import { Register } from './pages/register/Register';
import Home from './pages/Home/Home';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import "./style/Dark.css"
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className= {darkMode ? "app-dark" : "app"} >
       <Routes>  
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "register" element = {<Register />} />
        <Route path = "/userId" element = {<ProfileComp />} />
        <Route path = "/edit" element = {<EditProfile />} />
       </Routes> 
      
    </div>
  );
}

export default App;
