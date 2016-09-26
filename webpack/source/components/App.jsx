import React from 'react';
import { Component } from 'react';

export default class App extends Component{

  componentWillMount(){
    console.log("Super Component mounting")
    this.props.load_loggedin_user()
  }

  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}