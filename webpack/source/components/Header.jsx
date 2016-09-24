import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component{

  componentWillMount(){
    console.log("Header Component mounting")
  }

  render(){
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
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Hey <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to='/signup'>SignUp</Link>
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