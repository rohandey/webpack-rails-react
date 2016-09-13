import React from 'react';
import { connect } from 'react-redux';

import { fetchPost, fetchPostSuccess, fetchPostFailure, resetPost } from '../actions/posts';
import PostShow from '../components/PostShow.jsx';


const mapStateToProps = (state, passed_props) => {
  return{
    current_post: state.posts.current_post,
    post_id: passed_props.post_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (post_id) => {
      dispatch(fetchPost(post_id)).then((response) => {
            !response.error ? dispatch(fetchPostSuccess(response.payload)) : dispatch(fetchPostFailure(response.payload));
          });
    },

    resetPost: () => {
      dispatch(resetPost());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);