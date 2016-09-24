import React from 'react';
import { Component } from 'react';
import SignUpContainer from '../containers/SignUpContainer';

export default class SignUp extends Component{

  render(){
    return (
      <SignUpContainer>
        {this.props.children}
      </SignUpContainer>
    )
  }
}