import axios from 'axios';

export function fetchPosts(sort_column, sort_order){
  const request = axios({
    method: 'get',
    url: 'http://localhost:5000/api/posts',
    headers: [],
    params: {
      sort_column,
      sort_order
    }
  });

  return {
    type: 'FETCH_POSTS',
    payload: request
  }
}

export function fetchPostsSuccess(posts){
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts
  }
}


export function fetchPostsFailure(error){
  return {
    type: 'FETCH_POSTS_FAILURE',
    payload: error
  }
}

export function resetPostsList(){
  return {
    type: 'RESET_POSTS_LIST',
    payload: {}
  }
}

export function fetchPost(post_id){
  const request = axios({
    method: 'get',
    url: 'http://localhost:5000/api/posts/' + post_id,
    headers: []
  });


  return {
    type: 'FETCH_POST',
    payload: request
  }
}

export function fetchPostSuccess(post){
  return {
    type: 'FETCH_POST_SUCCESS',
    payload: post
  }
}

export function fetchPostFailure(error){
  return {
    type: 'FETCH_POST_FAILURE',
    payload: error
  }
}

export function resetPost(){
  return {
    type: 'RESET_POST',
    payload: {}
  }
}

export function create_post(data){
  const request = axios.post('http://localhost:5000/api/posts', data)
  return {
    type: 'CREATE_POST',
    payload: request
  }
}

export function create_post_success(post){
  return {
    type: 'CREATE_POST_SUCCESS',
    payload: post
  }
}

export function create_post_failure(error){
  return {
    type: 'CREATE_POST_FAILURE',
    payload: error
  }
}