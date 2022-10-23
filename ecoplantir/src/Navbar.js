import React, {Component} from "react";
export default class Navbar extends Component{
  render() {
    return(
      <nav className="nav">
        <p>EcoPlantir</p>
        <ul>
          <li>
            <a href="/Login">Login</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Explore">Explore</a>
          </li>
      </ul>
     </nav>
    );
  }
}