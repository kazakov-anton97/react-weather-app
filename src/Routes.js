import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import { ReactDOM, ReactRouterDOM } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App';

const Login = () => (
  <Switch>
    <Route exact path='/login' />
  </Switch>
)

const Market = () => (
  <Switch>
    <Route exact path='/market' />
  </Switch>
)

const Cart = () => (
  <Switch>
    <Route exact path='/cart' />
  </Switch>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/market' component={Market}/>
      <Route path='/cart' component={Cart}/>
    </Switch>
  </main>
)

export default Main;