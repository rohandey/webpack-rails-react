
export default function(state = {}, action) {

  switch(action.type) {

    case 'SIGNIN_USER':
      return Object.assign({}, state, { user: null, error: null, loading: true });

    case 'SIGNIN_USER_SUCCESS':
      return Object.assign({}, state, {  user: action.payload.data, error: null, loading: false } );

    case 'SIGNIN_USER_FAILURE':
      return Object.assign({}, state, { user: {}, error: action.payload.response.data.errors, loading: false } );

    case 'USER_FROM_AUTH_TOKEN':
      return Object.assign({}, state, { user: null, error: null, loading: true });

    case 'USER_FROM_AUTH_TOKEN_SUCCESS':
      return Object.assign({}, state, { user: action.payload.data,  error: null, loading: false });

    default:
      return state;
  }

}