
import React from 'react';
import {render} from 'react-dom';
import { Router , Route, IndexRoute, useRouterHistory, browserHistory } from 'react-router';


import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import ReduxModal from 'react-redux-modal'
import store, { history } from 'source/stores/store.js'

import { replace } from 'react-router-redux';


import App from 'source/pages/App.jsx';
import AboutUs from 'source/components/AboutUs.jsx';
import Contact from 'source/components/Contact.jsx';

import Posts from 'source/pages/Posts.jsx';
import PostEdit from 'source/pages/PostEdit.jsx';
import PostNew from 'source/pages/PostNew.jsx';
import PostShow from 'source/pages/PostShow.jsx';


import SignUp from 'source/pages/SignUP.jsx';

class RouteConfig extends React.Component{

  check_authentication(){
    let auth_token = localStorage.getItem('auth_token')

	 	if(!auth_token || auth_token === '') {

      //if login is a new page but not a popup
      //let redirectAfterLogin = this.props.location.pathname;
      //this.props.dispatch(push(`/login?next=${redirectAfterLogin}`))
	 		return;
	 	}
  }

  render(){
    return(

        <div>
          <Router history={history}>
            <Route path='/' component={App}>
              <IndexRoute component={AboutUs} />
              <Route path='/about' component={AboutUs} />
              <Route path='/contact' component={Contact} />
              <Route path='/posts' component={Posts}/>
              <Route path='/posts/new' component={PostNew} onEnter={this.check_authentication.bind(this)}/>
              <Route path='/posts/:id' component={PostShow} onEnter={this.check_authentication.bind(this)}/>
              <Route path='/post/:id/edit' component={PostEdit} onEnter={this.check_authentication.bind(this)}/>
              <Route path='/signup' component={SignUp}/>
            </Route>
          </Router>

          <ReduxModal />
        </div>

    )
  }

}


const mapDispatchToProps = (dispatch) => {
  return{
    dispatch
  }
}

const ConnectedRouteConfig = connect(null, mapDispatchToProps)(RouteConfig)

render(
    <Provider store={store}>
      <ConnectedRouteConfig/>
    </Provider>,
  document.getElementById('app'));
