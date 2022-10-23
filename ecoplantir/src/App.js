import './App.css';
import Explore from './Explore.js';
import Login from './Login.js';
import About from './About.js';
import Navbar from './Navbar.js';
import Register from './Register.js';
import Home from './Home.js';
import Results from './Results.js';

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
    case "/Results":
      component = <Results/>
  }
  return (
    <div className="App">
    <Navbar/>
    {component}
    </div>
  );
}

export default App;
