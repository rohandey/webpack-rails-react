import React, { Component } from 'react';


import PostEditContainer from '../containers/PostEditContainer';

export default class PostEdit extends Component{

  render(){
    return (
      <PostEditContainer {...this.props.children}/>
    )
  }
}