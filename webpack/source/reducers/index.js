import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import NewUserReducer from './reducer_new_user';
import PostsReducer from './reducer_posts';


const rootReducer = combineReducers({
  signup_user: NewUserReducer,
  posts: PostsReducer,
  routing: routerReducer

});


export default rootReducer;