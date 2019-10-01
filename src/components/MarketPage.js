import React, { Component } from 'react';
import { getProducts } from '../actions/products';
import Header from '../Header';
import Main from '../Routes';

import '../App.css';

class Market extends Component {
  render () {
    return (
      <section className="outerwear">
      <h2>Outerwear</h2>
          <div className="product">
            <div className="photo_item"></div>
              <p className="name">{this.getProducts.name}</p>
              <p className="price">{this.getProducts.price}</p>
              <button className="add_btn">ADD TO CART</button> 
          </div>
      </section>
    )
  }
}

export default Market;