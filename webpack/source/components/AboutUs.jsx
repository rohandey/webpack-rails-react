import React from 'react';
import { Link } from 'react-router';

export default class AboutUs extends React.Component{

  render(){
    return (
      <div>
        <Link to='contact/'>Contact</Link>
        <br/>
        About Us Page

      </div>
    );
  }

}