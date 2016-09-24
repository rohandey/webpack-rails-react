
export default function(state = {}, action) {

  switch(action.type) {

    case 'CREATE_USER':
      return Object.assign({}, state, {new_user:{ user: null, error: null, loading: true }});

    case 'CREATE_USER_SUCCESS':
      return Object.assign({}, state, { new_user:{ user: {}, error: null, loading: false } });

    case 'CREATE_USER_FAILURE':
      return Object.assign({}, state, { new_user:{ user: {}, error: action.payload.response.data.errors, loading: false } });

    default:
      return state;
  }

}