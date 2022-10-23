import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { signup } from "./Firebase";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pastEmail: '',
      password: '',
      pastPassword: '',
      confirmPassword: '',
      type: 'password',
      value: false,
      clicked: false,
      iconName: faEyeSlash,
      typeConfirm: 'password',
      clickedConfirm: false,
      iconNameConfirm: faEyeSlash,
      emailclass: 'sub-part',
      passclass: 'sub-part',
      confirmPassClass: 'sub-part',
      confirmWrong: false,
      passwordLength: false,
      groupName: 'group',
      buttonClass: 'register-button',
      registerSuccesful: false,
      check: false
    };
    this.handlePass = this.handlePass.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmpty = this.handleEmpty.bind(this);
    this.handleIconClickConfirm = this.handleIconClickConfirm.bind(this);
    this.handlePassConfirm = this.handlePassConfirm.bind(this);
    this.handlePasswordLength = this.handlePasswordLength.bind(this);
    this.registerSuccesfully = this.registeredSuccessfully.bind(this);
    this.handleConfirmWrong = this.handleConfirmWrong.bind(this);
    // this.checkingOnClick = this.checkingOnClick.bind(this);
  }
  async componentDidUpdate() {
    // try {
    //   if(this.state.check){
    //   signup(this.state.email, this.state.password);
    //   }
    // } catch (error) {
    //   alert("Error");
    // }
  }
  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  handlePass(event) {
    this.setState({
      password: event.target.value,
    });
  }
  handlePassConfirm(event) {
    this.setState({
      confirmPassword: event.target.value,
    });
  }
  handleSubmit(event) {
    console.log("here");
    event.preventDefault()
    if (this.state.firstname === '' || this.state.lastname === '' || this.state.username === ''
      || this.state.email === '' || this.state.password === '' || this.state.confirmPassword === '') {
      this.setState({
        value: true,
      });
      if (this.state.email === '') {
        this.setState({
          emailclass: 'register-error'
        });
      }
      if (this.state.password === '') {
        this.setState({
          passclass: 'register-error'
        });
      }
      if (this.state.confirmPassword === '') {
        this.setState({
          confirmPassClass: 'register-error'
        });
      }
    } else if (this.state.confirmPassword !== this.state.password) {
      this.setState({
        confirmWrong: true,
        buttonClass: 'button-other-error'
      });
    }
    //   if(this.state.confirmPassword !== this.state.password){
    //     if(this.state.password >=8){
    //       this.setState({
    //         confirmWrong:true,
    //         buttonClass:'button-other-error'
    //       });
    //     }
    //     else{
    //     this.setState({
    //       confirmWrong:true,
    //       buttonClass:'button-twoerror'
    //     });
    //   }
    //     if(this.state.password.length < 8){
    //       if(this.state.password.length !== 0){
    //         this.setState({
    //           passwordLength:true,
    //           groupName:'group-password',
    //         });
    //       }
    //     }
    //   } else if(this.state.password.length < 8){
    //       if(this.state.password.length !== 0){
    //         this.setState({
    //           passwordLength:true,
    //           groupName:'group-password',
    //           buttonClass:'button-error'
    //         });
    //       }
    // }
    // else if(this.state.confirmPassword !== this.state.password){
    //   if(this.state.password.length >=8){
    //     this.setState({
    //       confirmWrong:true,
    //       buttonClass:'button-other-error'
    //     });
    //   }
    //   else{
    //   this.setState({
    //     confirmWrong:true,
    //     buttonClass:'button-twoerror'
    //   });
    //   }
    // }
    // else if(this.state.password.length < 8){
    //   this.setState({
    //     passwordLength:true,
    //     groupName:'group-password',
    //     buttonClass:'button-error'
    //   });
    // }
    else{
      this.setState({
        check: true,
        pastEmail: this.state.email,
        pastPassword: this.state.password,
      });
      this.setState({
        email: '',
        password: ''
      });
    }
  }
  handleEmpty() {
    return (
      <div
        className="error-message"
        style={{
          display: this.state.value ? '' : 'none',
        }}>
        Please fill in all the fields!
      </div>
    );
  }
  registeredSuccessfully() {
    return (
      <div
        className="registered-message"
        style={{
          display: this.state.registerSuccessful ? '' : 'none',
        }}>
        <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
      Registered Successfully!  Proceed to Login Page.
      </div>
    );
  }
  handleConfirmWrong() {
    return (
      <div
        className="password-error"
        style={{
          display: this.state.confirmWrong ? '' : 'none',
        }}>
        <p>Two passwords don't match</p>
      </div>
    );
  }
  handlePasswordLength() {
    return (
      <div
        className="password-error"
        style={{
          display: this.state.passwordLength ? '' : 'none',
        }}>
        <p>Password is not long enough</p>
      </div>
    );
  }
  handleIconClick() {
    if (this.state.clicked) {
      this.setState({
        iconName: faEye,
        clicked: !this.state.clicked,
        type: "text"
      });
    }
    else {
      this.setState({
        iconName: faEyeSlash,
        clicked: !this.state.clicked,
        type: "password"
      });
    }
  }
  handleIconClickConfirm() {
    if (this.state.clickedConfirm) {
      this.setState({
        iconNameConfirm: faEye,
        clickedConfirm: !this.state.clickedConfirm,
        typeConfirm: "text"
      });
    }
    else {
      this.setState({
        iconNameConfirm: faEyeSlash,
        clickedConfirm: !this.state.clickedConfirm,
        typeConfirm: "password"
      });
    }
  }
  render() {
    return (
      <div className="background">
        <h4>REGISTER</h4>
        {this.handleEmpty()}
        {this.registeredSuccessfully()}
        <form className="form">
          <div className="group">
            <div className="group">
              <input className={this.state.emailclass} type="text" onChange={this.handleEmail} value={this.state.email} placeholder="Enter Email Address" />
            </div>
            <div className="group">
              <FontAwesomeIcon icon={this.state.iconName} className="icon-register" onClick={this.handleIconClick} />
              <input className={this.state.passclass} type={this.state.type} onChange={this.handlePass} value={this.state.password} placeholder="Enter Password" />
              {this.handlePasswordLength()}
            </div>
            <div className={this.state.groupName}>
              <FontAwesomeIcon icon={this.state.iconNameConfirm} className="icon-register" onClick={this.handleIconClickConfirm} />
              <input className={this.state.confirmPassClass} type={this.state.typeConfirm} onChange={this.handlePassConfirm} value={this.state.confirmPassword} placeholder="Enter Password Again" />
              {this.handleConfirmWrong()}
            </div>
            <button className={this.state.buttonClass}
              type="button"
              onClick={this.handleSubmit}>SUBMIT</button>
          </div>
        </form>
      </div>
    );
  }
}
