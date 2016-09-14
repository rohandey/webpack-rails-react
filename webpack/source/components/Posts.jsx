import React from 'react';
import { Link, browserHistory, useRouterHistory } from 'react-router';
import { push } from 'react-router-redux';


class PostRow extends React.Component{
  render(){
    return (
      <tr>
        <td>
          <Link to={"/posts/" + this.props.post.id }>{this.props.post.title}</Link>
        </td>
        <td>
      {this.props.post.body}
        </td>
      </tr>
    )
  }
}

export default class Posts extends React.Component{

  componentWillMount(){
    this.get_posts_data();
  }

  componentWillUnmount(){
    this.props.resetPostsList();
  }

  sort_column(sort_column, sort_order){
    //this.props.dispatch(push('/posts?sort_column=title&sort_order=asc'));
    this.props.fetchPosts(sort_column, sort_order);
  }

  get_posts_data() {
    let sort_column = (this.props.query.sort_coumn === undefined) ? 'title' : this.props.query.sort_coumn;
    let sort_order = (this.props.query.sort_order === undefined) ? 'asc' : this.props.query.sort_order;

    this.props.fetchPosts(sort_column, sort_order);
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
    let sort_order = this.props.query.sort_order == 'asc' ? 'desc' : 'asc'
    if(posts_loading == true){
      return  <div>Loading</div>;
    }else{
      return (
        <div className='container'>
          <h1>Posts</h1>
          <table>
            <thead>
              <tr>
                <th>
                  <Link to={{ pathname: 'posts', query: { sort_column: 'title', sort_order: sort_order } }} onClick={this.sort_column.bind(this, 'title', sort_order)}>Title</Link>
                </th>
                <th>
                  <Link to={{ pathname: 'posts', query: { sort_column: 'body', sort_order: sort_order } }} onClick={this.sort_column.bind(this, 'body', sort_order)}>Body</Link>
                </th>
              </tr>
            </thead>
            <tbody>
            {this.renderPosts(posts)}
            </tbody>
          </table>
        </div>
      )
    }
  }

}