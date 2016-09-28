import React from 'react';
import { Link } from 'react-router';
import { push } from 'react-router-redux';

class SignUpForm extends React.Component{

  submit_user(e){
    e.preventDefault();
    let data = {
      'user': {
        'name': this.refs.name.value,
        'email': this.refs.email.value,
        'password': this.refs.password.value
      }
    }
    this.context.create_user(data);
  }

  render(){
    return(
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={this.submit_user.bind(this)}>
            <div>
              <input type='text' name='name' ref='name' placeholder='Name'/>
            </div>
            <div>
              <input type='text' name='email' ref='email' placeholder='Email'/>
            </div>
            <div>
              <input type='text' name='password' ref='password' placeholder='Password'/>
            </div>

            <div>
              <input type='submit' />
            </div>
          </form>
        </div>
    )
  }
}

SignUpForm.contextTypes = {
    create_user: React.PropTypes.func
}



class SignUp extends React.Component{

  getChildContext() {
    let that = this
    return {
      create_user(data){
        that.props.create_user(data)
      }
    };
  }

  componentDidMount(){
    this.redirect_if_logged_in()
  }

  componentDidUpdate() {
    this.redirect_if_logged_in()
  }

  redirect_if_logged_in(){
    if(this.props.current_user.user != null){
      this.props.unauthenticated_redirect()
    }
  }

  render(){
    const { user, error } = this.props.new_user;
    let error_string = ''
    if(error != null){
      error_string = error.join()
    }


    return (
      <div className='container'>
        <div>
          {error_string}
        </div>
        <SignUpForm/>
      </div>
    )
  }
}


SignUp.childContextTypes = {
 create_user: React.PropTypes.func
}

SignUp.contextTypes = {
 create_user: React.PropTypes.func
}


export default SignUp;