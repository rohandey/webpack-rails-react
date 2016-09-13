import React from 'react';
import { Link } from 'react-router';


export default class PostShow extends React.Component{

  componentWillMount(){
    this.props.fetchPost(this.props.post_id);
  }

  componentWillUnmount(){
    this.props.resetPost();
  }

  render(){
    const { post, post_loading, error } = this.props.current_post;

    if(post_loading == true){
      return  <div>Loading</div>;
    }else{
      return (
        <div className='container'>
          <h1>Post Show</h1>
          <ul>
          {post.title}
          </ul>
        </div>
      )
    }
  }

}