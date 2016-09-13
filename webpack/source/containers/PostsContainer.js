import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts, fetchPostsSuccess, fetchPostsFailure, resetPostsList } from '../actions/posts';
import Posts from '../components/Posts.jsx';


const mapStateToProps = (state) => {
  return{
    postsList: state.posts.postsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts()).then((response) => {
            !response.error ? dispatch(fetchPostsSuccess(response.payload)) : dispatch(fetchPostsFailure(response.payload));
          });
    },

    resetPostsList: () => {
      dispatch(resetPostsList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);