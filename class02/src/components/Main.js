import React, { Component } from 'react';
import data from '../data.json';
import Product from './Product'

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>Some Products can found here</h1>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/640px-Banana-Single.jpg' alt='A Banana'></img>
     {/* product component goes here  */}
     {data.products.map(product => {
          return(
          <Product title={product.title} description={product.description} img={product.images[0]} key={product.id}/>
          )
        })}
      </div>
    )
  }
}
