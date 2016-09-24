import { createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware,  syncHistoryWithStore} from 'react-router-redux';
import { browserHistory, useRouterHistory } from 'react-router';

import promise from 'redux-promise';

import { createHistory } from 'history';

// custom history is picked up from
// https://github.com/tomduncalf/react-router-base-issue/blob/master/src/routes/Routes.jsx
// for fixing basename warning issue
// https://github.com/reactjs/react-router/issues/3387

const router_history = useRouterHistory(createHistory)({ basename: '' });

//import root reducer
import rootReducer from '../reducers/index';


//create default data
const INITIAL_POSTS_STATE = {
  postsList: {posts: [], error:null, posts_loading: true},
  current_post: { post: {}, error: null, post_loading: true }
}

const INITIAL_SIGNUP_USER_STATE = {
  new_user:{ user: null, error: null, loading: false }
}

const defaultState = {
  posts: INITIAL_POSTS_STATE,
  signup_user: INITIAL_SIGNUP_USER_STATE
}

//apply promise middleware
const finalCreateStore = compose(
  applyMiddleware(promise, routerMiddleware(router_history))
)(createStore);

//create the store object to be used in the app
const store = finalCreateStore(rootReducer, defaultState);




export const history = syncHistoryWithStore(router_history, store);

export default store;
