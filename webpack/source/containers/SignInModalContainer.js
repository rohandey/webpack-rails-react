import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { signin_user, signin_user_failure, signin_user_success } from '../actions/signin_user';

import SignInModalComponent from '../components/SignInModal.jsx';


const mapStateToProps = (state) => {
  return{
    current_user: state.current_user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    signin_user: (data) => {
      dispatch(signin_user(data)).then((response) => {
        if(response.error){
          dispatch(signin_user_failure(response.payload));
        }else{
          //in real apps auth token to be set in place of user id
          localStorage.setItem('auth_token', response.payload.data.id);
          dispatch(signin_user_success(response.payload));
        }

      });
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInModalComponent);