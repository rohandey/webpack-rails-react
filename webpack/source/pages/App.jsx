import React from 'react';
import { Component } from 'react';
import AppContainer from '../containers/AppContainer';
import HeaderContainer from '../containers/HeaderContainer';



export default class App extends Component {
  render() {
    return (
    	<AppContainer>
       <HeaderContainer history_obj={this.props.history} location_path={this.props.location}/>
    	 {this.props.children}
    	</AppContainer>
    );
  }
}
