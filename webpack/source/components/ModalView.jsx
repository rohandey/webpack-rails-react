import React from 'react';
import {modal} from 'react-redux-modal'



export default class ModalComponent extends React.Component{

  constructor(props) {
      super(props);
      console.log('## MODAL DATA AND PROPS:', this.props);
  }

  componentWillUnmount(){

  }

  removeThisModal() {
    this.props.removeModal();
  }

  render() {
    return (
      <div>
        <p>this is my modal</p>
        <button
          type="button"
          onClick={this.removeThisModal.bind(this)}>
          close this modal
        </button>
      </div>
    );
  }

}