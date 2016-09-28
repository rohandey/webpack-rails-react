import React from 'react';
import { Link } from 'react-router';
import { push } from 'react-router-redux';


class PostNew extends React.Component{

  add_post(e){
    e.preventDefault();
    let data = {
      'post': {
        'title': this.refs.title.value,
        'body': this.refs.body.value
      }
    }
    this.props.create_post(data)
  }

  render(){
    const { post, error } = this.props.new_post;
    let error_string = ''
    if(error != null){
      error_string = error.join()
    }
    return (
      <div className='container'>
        New Post
        <div>
          {error_string}
        </div>
        <form onSubmit={this.add_post.bind(this)}>
          <div>
            <input type='text' ref='title' placeholder='title'/>
          </div>

          <div>
            <input type='text' ref='body' placeholder='body'/>
          </div>

          <div>
            <input type='submit'/>
          </div>

        </form>
      </div>
    )
  }
}


export default PostNew;