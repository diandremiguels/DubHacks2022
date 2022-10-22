import React, {Component} from "react";
export default class Navbar extends Component{
  render() {
    return(
      <nav className="nav">
        <ul>
          <li>
            <a href="/Explore">Explore</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
      </ul>
     </nav>
    );
  }
}