import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as modalReducer} from 'react-redux-modal'

import CurrentUserReducer from './reducer_current_user';
import NewUserReducer from './reducer_new_user';
import PostsReducer from './reducer_posts';


const rootReducer = combineReducers({
  current_user: CurrentUserReducer,
  signup_user: NewUserReducer,
  posts: PostsReducer,
  routing: routerReducer,
  modals: modalReducer

});


export default rootReducer;