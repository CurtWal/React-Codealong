import React, { Component } from 'react'

import{Button, Card} from 'react-bootstrap'

export default class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      cart: 0,
    }
  }
  handleClicks(){
    // When user clicks
    // add 1
    this.setState((prevState) => ({
      cart: prevState.cart + 1
    }))
    console.log(this.state.cart); // console is syncc=rhonous
  }

  render() {
    return (
      <div>
        {/* {I will pass my data in this component, so I I need to use this.props here} */}
        {/* <h1>{this.props.title}</h1>
        <h3>🛒 {this.state.cart} added to cart</h3>
        <img onClick={() => this.handleCLicks()} src={this.props.img} alt={this.props.title}></img>
        <p>{this.props.description}</p> */}

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.img} alt={this.props.title}/>
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
        <Button onClick={() => this.handleClicks()} variant="primary">🛒 {this.state.cart} added to cart</Button>
      </Card.Body>
        </Card>
        
      </div>
    )
  }
}
