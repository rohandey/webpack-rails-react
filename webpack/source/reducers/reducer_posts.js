export default function(state = {}, action) {

  switch(action.type) {

    case 'FETCH_POSTS':// start fetching posts and set loading = true
      new_state = Object.assign({}, state, { postsList: {posts:[], error: null, posts_loading: true } });
      return new_state;

    default:
      return state;
  }

}