import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import {modal} from 'react-redux-modal'; // The modal emitter


import SignInModalContainer from '../containers/SignInModalContainer';

class LoginLinks extends Component{

  sign_out(e){
    e.preventDefault()
    this.context.sign_out()
  }

  addModal(e){
    e.preventDefault()
    this.context.addModal()
  }

  render(){
    let current_user = this.props.current_user
    let name = ''
    name = current_user && current_user.user && current_user.user.name

    if(name === null) {
      return(
        <ul className="dropdown-menu">
          <li>
            <Link to='/signup'>SignUp</Link>
          </li>
          <li>
            <a href='#' onClick={this.addModal.bind(this)}>SignIn</a>
          </li>
        </ul>
      )
    }else{
      return(
        <ul className="dropdown-menu">
          <li>
            <a href='#' onClick={this.sign_out.bind(this)}>Sign Out</a>
          </li>
        </ul>
      )
    }

  }
}

LoginLinks.contextTypes = {
    sign_out: React.PropTypes.func,
    addModal: React.PropTypes.func
}

export default class Header extends Component{

  componentWillMount(){
    console.log("Header Component mounting")
  }

  getChildContext(e) {

    let that = this
    return {
      sign_out(data){
        that.props.sign_out()
      },

      addModal() {
        modal.add(SignInModalContainer, {
          title: 'Sign In',
          size: 'medium',
          closeOnOutsideClick: false,
          hideCloseButton: false,
          history_obj: that.props.history_obj,
          location_path: that.props.location_path
        });
      }

    };
  }



  render(){
    //this.props.history_obj.replace(this.props.location_path)
    //return
    let current_user = this.props.current_user
    let name = ''
    if(current_user && current_user.user && current_user.user.name) {
      name = current_user.user.name
    }
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>


            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <Link to={'/posts'}>Posts</Link>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li><Link to='contact/'>Contact</Link></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hey {name}<span className="caret"></span></a>

                  <LoginLinks current_user={current_user}></LoginLinks>

                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

Header.childContextTypes = {
 sign_out: React.PropTypes.func,
 addModal: React.PropTypes.func

}
