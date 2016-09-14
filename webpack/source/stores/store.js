import { createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware,  syncHistoryWithStore} from 'react-router-redux';
import { browserHistory, useRouterHistory } from 'react-router';

import promise from 'redux-promise';

//import { createHistory } from 'history';

// custom history is picked up from
// https://github.com/tomduncalf/react-router-base-issue/blob/master/src/routes/Routes.jsx
// for fixing basename warning issue
// https://github.com/reactjs/react-router/issues/3387

//const router_history = useRouterHistory(createHistory)({ basename: '' });

//import root reducer
import rootReducer from '../reducers/index';


//create default data
const INITIAL_POSTS_STATE = {
  postsList: {posts: [], error:null, posts_loading: true},
  current_post: { post: {}, error: null, post_loading: true }
}

const defaultState = {
  posts: INITIAL_POSTS_STATE,
}

//apply promise middleware
const finalCreateStore = compose(
  applyMiddleware(promise, routerMiddleware(browserHistory))
)(createStore);

//create the store object to be used in the app
const store = finalCreateStore(rootReducer, defaultState);




export const history = syncHistoryWithStore(browserHistory, store);

export default store;
