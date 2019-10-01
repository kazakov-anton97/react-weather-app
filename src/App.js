import React, { Component } from 'react';
import { Route } from 'react-router';
import { Redirect, Link } from 'react-router-dom';
import MarketPage from './components/MarketPage';
import Header from './Header';
import { getProducts } from './actions/products';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      formErrors: {login: '', password: ''},
      loginValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let loginValid = this.state.loginValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'login':
        loginValid = value.match(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i);
        fieldValidationErrors.login = loginValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    loginValid: loginValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.loginValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

handleClick = () => {
        this.setState({ navigate: true});
}

  render () {
    return (
      <form className="form">
        <h2>Login</h2>
        <div className={`form-group ${this.errorClass(this.state.formErrors.login)}`}>
          <label htmlFor="login">Login</label>
          <input type="text" required className="form-control" name="login"
            placeholder="Login"
            value={this.state.login}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>
          <button onClick="window.location.assign('http://localhost:3000/market/" type="submit" className="btn btn-primary" disabled={!this.state.formValid}>
            Submit
          </button>
      </form>
    )
  }
}

export default App;