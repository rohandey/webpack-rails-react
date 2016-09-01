import { createStore, compose} from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory, useRouterHistory } from 'react-router';

import { createHistory } from 'history';

// custom history is picked up from
// https://github.com/tomduncalf/react-router-base-issue/blob/master/src/routes/Routes.jsx
// for fixing basename warning issue
// https://github.com/reactjs/react-router/issues/3387

const router_history = useRouterHistory(createHistory)({ basename: '' });

//import root reducer
import rootReducer from '../reducers/index';


//create default data
const INITIAL_POSTS_STATE = {postsList: {posts: [], error:null, posts_loading: false}}

const defaultState = {
  posts: INITIAL_POSTS_STATE
}

//create the store object to be used in the app
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(router_history, store);

export default store;
