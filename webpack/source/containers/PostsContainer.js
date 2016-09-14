import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts, fetchPostsSuccess, fetchPostsFailure, resetPostsList } from '../actions/posts';
import Posts from '../components/Posts.jsx';


const mapStateToProps = (state, passed_props) => {
  return{
    postsList: state.posts.postsList,
    query: passed_props.query

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    fetchPosts: (sort_column, sort_order) => {
      dispatch(fetchPosts(sort_column, sort_order)).then((response) => {
            !response.error ? dispatch(fetchPostsSuccess(response.payload)) : dispatch(fetchPostsFailure(response.payload));
          });
    },

    resetPostsList: () => {
      dispatch(resetPostsList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);