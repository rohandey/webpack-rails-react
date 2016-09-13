import React from 'react';
import { Component } from 'react';
import PostShowContainer from '../containers/PostShowContainer';

export default class PostShow extends Component{

  render(){
    return (
      <PostShowContainer post_id={this.props.params.id}>
        {this.props.children}
      </PostShowContainer>
    )
  }
}