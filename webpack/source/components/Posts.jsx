import React from 'react';
import { Link, browserHistory, useRouterHistory } from 'react-router';
import { push } from 'react-router-redux';


class PostRow extends React.Component{

  render(){
    const {post, current_user} = this.props

    return (
      <tr>
        <td>
          <Link to={"/posts/" + post.id }>{post.title}</Link>
        </td>
        <td>
          {post.body}
        </td>
        <td>
          {current_user.user == null ? '' : <Link to={"/post/" + post.id + "/edit"}>edit</Link>}
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

  renderPosts(posts, current_user){
    return posts.map((post) => {
      return (
        <PostRow post={post} key={post.id} current_user={current_user}/>
      )
    });
  }

  render(){
    const { posts, posts_loading, error } = this.props.postsList;
    const current_user = this.props.current_user;
    let sort_order = this.props.query.sort_order == 'asc' ? 'desc' : 'asc'
    if(posts_loading == true){
      return  <div>Loading</div>;
    }else{
      return (
        <div className='container'>
          <h1>Posts</h1>

          {current_user.user == null ? '' : (<Link to='/posts/new' className='btn btn-primary'>Add Post</Link>)}
          <table>
            <thead>
              <tr>
                <th>
                  <Link to={{ pathname: 'posts', query: { sort_column: 'title', sort_order: sort_order } }} onClick={this.sort_column.bind(this, 'title', sort_order)}>Title</Link>
                </th>
                <th>
                  <Link to={{ pathname: 'posts', query: { sort_column: 'body', sort_order: sort_order } }} onClick={this.sort_column.bind(this, 'body', sort_order)}>Body</Link>
                </th>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
            {this.renderPosts(posts, current_user)}
            </tbody>
          </table>
        </div>
      )
    }
  }

}