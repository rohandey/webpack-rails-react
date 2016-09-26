import React from 'react';
import { Link } from 'react-router';
import {modal} from 'react-redux-modal'; // The modal emitter

import ModalComponent from 'source/components/ModalView.jsx';

export default class Contact extends React.Component{

  addModal() {
    modal.add(ModalComponent, {
      title: 'This is my modal',
      size: 'medium', // large, medium or small,
      closeOnOutsideClick: false, // (optional) Switch to true if you want to close the modal by clicking outside of it
      hideCloseButton: false // (optional) if you don't wanna show the top right close button
      //.. all what you put in here you will get access in the modal props ;)
    });
  }

  componentDidMount(){
    //wait for a paint to do onload stuff
    //to test opening modal on load of page
    window.requestAnimationFrame(function() {
      modal.add(ModalComponent, {
        title: 'This is my modal',
        size: 'medium',
        closeOnOutsideClick: false,
        hideCloseButton: false
      });
    });
  }

  render(){
    return (
      <div>
        <Link to='about/'>About</Link>
        <br/>
        Contact Us Page
        <button onClick={this.addModal.bind(this)}>Add modal</button>
      </div>
    );
  }

}