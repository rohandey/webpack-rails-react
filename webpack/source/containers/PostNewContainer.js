import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { create_post, create_post_success, create_post_failure } from '../actions/posts';
import PostNew from '../components/PostNew.jsx';


const mapStateToProps = (state) => {
  return{
    new_post: state.posts.new_post

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create_post: (data) => {
      dispatch(create_post(data)).then((response) => {

        if(response.error){
          dispatch(create_post_failure(response.payload));
        }else{
          dispatch(create_post_success(response.payload));
          dispatch(push('/posts'));
        }


      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);