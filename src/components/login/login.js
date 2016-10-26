import React, { Component } from 'react';
import './login.css';
import logo from './logo.svg';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <form className="login-form">
          <p>Please login</p>
          <div className="login-formGroup">
            <input type="textbox" className="login-textbox" placeholder="Enter username"/>
          </div>
          <div className="login-formGroup">
            <input type="password" className="login-textbox" placeholder="Enter password"/>
          </div>
          <div>
            <input type="submit" className="login-formBtnSubmit" value="Sign In"/>
          </div>
          <div>
            <input type="reset" className="login-formBtnCancel" value="Reset"/>
          </div>
        </form>

      </div>
    );
  }
}

export default Login;