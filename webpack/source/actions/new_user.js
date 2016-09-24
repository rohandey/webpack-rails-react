import axios from 'axios';


export function createUser(post_data){


  const request = axios.post('http://localhost:5000/api/users', post_data)

  return {
    type: 'CREATE_USER',
    payload: request
  }
}

export function createUserSuccess(user){
  return {
    type: 'CREATE_USER_SUCCESS',
    payload: user
  }
}


export function createUserFailure(error){
  return {
    type: 'CREATE_USER_FAILURE',
    payload: error
  }
}