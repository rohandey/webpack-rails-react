import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { signout_user } from '../actions/signin_user';

import Header from '../components/Header.jsx';


const mapStateToProps = (state) => {
  return{
    current_user: state.current_user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sign_out: (data) => {
      localStorage.setItem('auth_token', '');
      dispatch(signout_user())
      dispatch(push('/'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);