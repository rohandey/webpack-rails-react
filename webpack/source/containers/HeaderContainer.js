import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header.jsx';


const mapStateToProps = (state) => {
  return{
    current_user: state.current_user
  }
}



export default connect(mapStateToProps, null)(Header);