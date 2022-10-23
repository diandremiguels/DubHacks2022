import './App.css';
import Explore from './Explore.js';
import Login from './Login.js';
import About from './About.js';
import Navbar from './Navbar.js';
import Register from './Register.js';
import Home from './Home.js';
import Dashboard from './Dashboard.js';
import LoggedInNavbar from './LoggedInNavbar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, {useState} from "react";
import Results from './Results.js';

const handleLogin = e => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return true;
    }
    else{
      return false;
    }
  });
}

function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/Explore":
      component = <Explore/>
      break
    case "/Login":
      component = <Login/>
      break
    case "/About":
      component = <About/>
      break
    case "/Register":
      component = <Register/>
    break
    case "/Dashboard":
    component = <Dashboard/>
    case "/Results":
      component = <Results/>
  }
  return (
    <div className="App">
    <Navbar/>
    {/* {handleLogin()? <LoggedInNavbar/> : <Navbar/>} */}
    {component}
    </div>
  );
}

export default App;
