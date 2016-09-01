import React from 'react';
import { Link } from 'react-router';

export default class Contact extends React.Component{

  render(){
    return (
      <div>
        <Link to='about/'>About</Link>
        <br/>
        Contact Us Page

      </div>
    );
  }

}