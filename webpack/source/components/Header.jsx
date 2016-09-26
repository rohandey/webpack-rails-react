import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import {modal} from 'react-redux-modal'; // The modal emitter


import SignInModalContainer from '../containers/SignInModalContainer';

export default class Header extends Component{

  componentWillMount(){
    console.log("Header Component mounting")
  }

  addModal(e) {
    e.preventDefault();
    console.log(this.props)
    let that = this
    modal.add(SignInModalContainer, {
      title: 'Sign In',
      size: 'medium',
      closeOnOutsideClick: false,
      hideCloseButton: false
    });
  }

  render(){
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
                  <ul className="dropdown-menu">
                    <li>
                      <Link to='/signup'>SignUp</Link>
                      <a href='#' onClick={this.addModal.bind(this)}>SignIn</a>

                    </li>

                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}