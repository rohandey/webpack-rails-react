import React from 'react';
import { Component } from 'react';

export default class Header extends Component{

  componentWillMount(){
    console.log("Header Component mounting")
  }

  render(){
    return (
      <div>
        Logo and menu comes here
      </div>
    )
  }
}