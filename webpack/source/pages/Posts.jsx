import React from 'react';
import { Component } from 'react';
import PostsContainer from '../containers/PostsContainer';

export default class Posts extends Component{

  render(){
    return (
      <PostsContainer>
        {this.props.children}
      </PostsContainer>
    )
  }
}