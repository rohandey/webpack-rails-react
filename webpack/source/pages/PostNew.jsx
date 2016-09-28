import React, { Component } from 'react';


import PostNewContainer from '../containers/PostNewContainer';

export default class PostNew extends Component{

  render(){
    return (
      <PostNewContainer {...this.props.children}/>
    )
  }
}