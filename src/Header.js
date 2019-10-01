import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import { Link } from 'react-router-dom'
import App from './App';
import cart from './img/basket.png'
import MarketPage from './components/MarketPage.js';
import CartPage from './components/CartPage.js';

import './App.css';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            currentCount: 1
        };
        this.updateCount = this.updateCount.bind(this);
    }
    updateCount() {
            return function() {
                return this.currentCount++;s
            };
    }
    render() {
         return (
            <header>
                <div className="basket">
                <img src={cart} alt="basket_icon" />
                    <span id="items_count">Cart (0)</span>
                </div>  
           </header>
        )
    }
}

export default Header;