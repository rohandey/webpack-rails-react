import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createUser, createUserSuccess,  createUserFailure } from '../actions/new_user';
import SignUp from '../components/SignUp.jsx';


const mapStateToProps = (state) => {
  return{
    new_user: state.signup_user.new_user,
    current_user: state.current_user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create_user: (data) => {
      dispatch(createUser(data)).then((response) => {

        if(response.error){
          dispatch(createUserFailure(response.payload));
        }else{
          dispatch(createUserSuccess(response.payload));
          dispatch(push('/posts'));
        }


      });
    },

    unauthenticated_redirect: () => {
      console.log('redirct')
      dispatch(push('/posts'));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);