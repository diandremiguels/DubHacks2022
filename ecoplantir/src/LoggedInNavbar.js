import React, {Component} from "react";
import {logout} from "./Firebase";

export default class LoggedInNavbar extends Component{
  constructor(props){
    super(props);
    this.state={
      check:false
    }
    this.handleLogOut=this.handleLogOut.bind(this);
  }
  handleLogOut() {
    this.setState({
      check:true
    });
  }
  async componentDidMount(){
    // await signup(this.state.email, this.state.password);
    try {
      if(this.state.check){
      await logout();
      }
    } catch (error) {
      alert("Error");
    }
  }
  render() {
    return(
      <nav className="modified-nav">
        <ul>
          <div className="group-elements">
          <li>
            {/* <a href="/" onClick={this.handleLogOut}>Log Out</a> */}
          </li>
          <li>
            <a href="/About">Contact Us</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/Home">Home</a>
          </li>
          </div>
      </ul>
     </nav>

    );
  }
}