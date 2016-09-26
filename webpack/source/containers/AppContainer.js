import React, { Component } from 'react';
import { connect } from 'react-redux';
import { user_from_auth_token, user_from_auth_token_success } from '../actions/signin_user';

import App from '../components/App.jsx';

const mapStateToProps = (state) => {
  return{
    current_user: state.current_user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    load_loggedin_user: () => {

      let auth_token = localStorage.getItem('auth_token')
  	 	if(!auth_token || auth_token === '') {
        //if there is no token, dont bother
  	 		return;
  	 	}

      dispatch(user_from_auth_token({auth_token})).then((response) => {
        if(response.error){
          //do nothing
        }else{
          dispatch(user_from_auth_token_success(response.payload));
        }

      });
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);