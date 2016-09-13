
import React from 'react';
import {render} from 'react-dom';
import { Router , Route, IndexRoute, useRouterHistory, browserHistory } from 'react-router';


import { Provider } from 'react-redux';
import store, { history } from 'source/stores/store.js'


import App from 'source/pages/App.jsx';
import PostShow from 'source/pages/PostShow.jsx';
import AboutUs from 'source/components/AboutUs.jsx';
import Contact from 'source/components/Contact.jsx';

import Posts from 'source/pages/Posts.jsx';

render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={AboutUs} />
          <Route path='/about' component={AboutUs} />
          <Route path='/contact' component={Contact} />
          <Route path='/posts' component={Posts}/>
          <Route path='/posts/:id' component={PostShow}/>
        </Route>
      </Router>
    </Provider>
    ,
    document.getElementById('app')
);
