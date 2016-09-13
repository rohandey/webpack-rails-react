import React from 'react';
import { Link } from 'react-router';

class PostRow extends React.Component{
  render(){
    return (
        <li>
          <Link to={"/posts/" + this.props.post.id }>{this.props.post.title}</Link>
        </li>
    )
  }
}

export default class Posts extends React.Component{

  componentWillMount(){
    this.props.fetchPosts();
  }

  componentWillUnmount(){
    this.props.resetPostsList();
  }

  renderPosts(posts){
    return posts.map((post) => {
      return (
        <PostRow post={post} key={post.id}/>
      )
    });
  }

  render(){
    const { posts, posts_loading, error } = this.props.postsList;

    if(posts_loading == true){
      return  <div>Loading</div>;
    }else{
      return (
        <div className='container'>
          <h1>Posts</h1>
          <ul>
          {this.renderPosts(posts)}
          </ul>
        </div>
      )
    }
  }

}