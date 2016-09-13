
export default function(state = {}, action) {

  switch(action.type) {

    case 'FETCH_POSTS':// start fetching posts and set loading = true
      return Object.assign({}, state, { postsList: {posts:[], error: null, posts_loading: true } });

    case 'FETCH_POSTS_SUCCESS':
      return Object.assign({}, state, { postsList: { posts: action.payload.data, error: null, posts_loading: false } });

    case 'FETCH_POSTS_FAILURE':
      return Object.assign({}, state, { postsList: { posts: [], error: error, posts_loading: false } });

    case 'RESET_POSTS_LIST':
      return Object.assign({}, state, { postsList: {posts:[], error: null, posts_loading: true } });

    case 'FETCH_POST':
      return Object.assign({}, state, { current_post: { post: {}, error: null, post_loading: true } })

    case 'FETCH_POST_SUCCESS':
      return Object.assign({}, state, { current_post: { post: action.payload.data, error: null, post_loading: false } })

    case 'FETCH_POST_FAILURE':
      return Object.assign({}, state, { current_post: { post: {}, error: { message: 'Failed to Load' }, post_loading: false } })

    case 'RESET_POST':
      return Object.assign({}, state, { current_post: { post: {}, error: null, post_loading: true } })

    default:
      return state;
  }

}