import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye} from '@fortawesome/free-solid-svg-icons'
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {login} from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      username: '',
      pastUsername: '',
      password:'',
      pastPassword:'',
      type:'password',
      value:false,
      clicked:false,
      iconName:faEyeSlash,
      userClass:'part',
      passClass:'part',
      incorrectLogin:false,
      check:false
    };
    this.handleUsername =this.handleUsername.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleIconClick=this.handleIconClick.bind(this);
    this.handleEmpty=this.handleEmpty.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleLoginError=this.handleLoginError.bind(this);
    this.handleIconClick=this.handleIconClick.bind(this);
  }
  componentDidUpdate(){
    try {
      if(this.state.check){
      login(this.state.username, this.state.password);
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          window.open("/Dashboard");
        }
      });
    }
  }
    catch {
      alert("Error!");
    }
  }
  handleUsername(event){
    this.setState({
      username: event.target.value,
    });
  }
  handlePassword(event){
    this.setState({
      password: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    if(this.state.username === '' || this.state.password === ''){
      this.setState({
        value:true,
      });
      if(this.state.username === ''){
        this.setState({
          userClass:'error'
        });
      }
      if(this.state.password === ''){
        this.setState({
          passClass:'error'
        });
      }
    } else{
      this.setState({
        check:true,
      });
    }
}
  handleEmpty() {
    return(
      <div
      className="error-login"
      style={{
        display: this.state.value? '' : 'none',
      }}>
       <i class="fa fa-times-circle"></i>
        Please fill in all the fields!
    </div>
    );
  }
  handleLoginError() {
    return(
      <div
      className="incorrect-login"
      style={{
        display: this.state.incorrectLogin? '' : 'none',
      }}>
       <i class="fa fa-times-circle"></i>
        Incorrect username or password!
    </div>
    );
  }
  handleIconClick() {
    if(this.state.clicked){
      this.setState({
        iconName: faEye,
        clicked: !this.state.clicked,
        type: "text"
      });
    }
    else{
      this.setState({
        iconName: faEyeSlash,
        clicked: !this.state.clicked,
        type: "password"
      });
    }
  }
  render() {
    return(
      <div className="container-app">
        <h4>LOGIN</h4>
        {this.handleEmpty()}
        {this.handleLoginError()}
        <form className="form">
          <div className="group">
          {/* <label className="label">Username</label> */}
          <input className={this.state.userClass} placeholder="Enter Username" type="text" onChange={this.handleUsername} value={this.state.username}/>
          </div>
            <div className="group">
              <div className="group1">
              {/* <label className="label">Password</label> */}
              {/* <a href="/"><h6>Forgot Password?</h6></a> */}
            </div>
            <FontAwesomeIcon icon={this.state.iconName} className="icon" onClick={this.handleIconClick}/>
            <input className={this.state.passClass} placeholder="Enter Password" type={this.state.type} onChange={this.handlePassword} value={this.state.password}/>
            </div>
            <button className="submit-button"
                    type="submit"
                    onClick={this.handleSubmit}>SUBMIT</button>
             <div>
              <div className="group2">
                <p>Don't have an account?</p>
                <a href="/Register"><h6>Register?</h6></a>
              </div>
            </div>
        </form>
      </div>
    );
  }
}