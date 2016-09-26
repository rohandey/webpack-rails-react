import React from 'react';
import {modal} from 'react-redux-modal'



export default class SignInModalComponent extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidUpdate(){
    let current_user = this.props.current_user
    if(current_user && current_user.user && current_user.user.name) {
      this.removeThisModal()
    }
  }

  removeThisModal() {
    this.props.removeModal();
  }

  submitSignin(e){
    e.preventDefault();

    let data = {
      'email': this.refs.email.value,
      'password': this.refs.password.value
    }

    this.props.signin_user(data);
  }

  render() {
    return (
      <div>
        <p>Sign In</p>

        <form onSubmit={this.submitSignin.bind(this)}>
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

        <button
          name='close_modal'
          type="button"
          onClick={this.removeThisModal.bind(this)}>
          close this modal
        </button>
      </div>
    );
  }

}