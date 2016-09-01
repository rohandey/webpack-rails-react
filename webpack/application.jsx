
import React from 'react';
import {render} from 'react-dom';
import { Router , Route, IndexRoute, useRouterHistory, browserHistory } from 'react-router';


import { Provider } from 'react-redux';
import store, { history } from 'source/stores/store.js'



import AboutUs from 'source/components/AboutUs.jsx';
import Contact from 'source/components/Contact.jsx';

render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' >
          <IndexRoute component={AboutUs} />
          <Route path='/about' component={AboutUs} />
          <Route path='/contact' component={Contact} />
        </Route>
      </Router>
    </Provider>
    ,
    document.getElementById('app')
);
