import axios from 'axios';


export function signin_user(data){
  const request = axios.post('http://localhost:5000/api/signin', data)

  return {
    type: 'SIGNIN_USER',
    payload: request
  }
}

export function signin_user_success(user){
  return {
    type: 'SIGNIN_USER_SUCCESS',
    payload: user
  }
}


export function signin_user_failure(error){
  return {
    type: 'SIGNIN_USER_FAILURE',
    payload: error
  }
}

export function user_from_auth_token(data){
  const request = axios.post('http://localhost:5000/api/authenticate', data)
  return {
    type: 'USER_FROM_AUTH_TOKEN',
    payload: request
  }
}

export function user_from_auth_token_success(user){
  return {
    type: 'USER_FROM_AUTH_TOKEN_SUCCESS',
    payload: user
  }
}