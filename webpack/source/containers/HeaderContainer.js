import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { signout_user } from '../actions/signin_user';

import Header from '../components/Header.jsx';


const mapStateToProps = (state, passed_props) => {
  return{
    current_user: state.current_user,
    history_obj: passed_props.history_obj,
    location_path: passed_props.location_path
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sign_out: (data) => {
      localStorage.setItem('auth_token', '');
      dispatch(signout_user())
      dispatch(push('/posts'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);