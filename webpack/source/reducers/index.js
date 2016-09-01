import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  routing: routerReducer

});


export default rootReducer;