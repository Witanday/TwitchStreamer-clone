import React from 'react';
import ReactDom from 'react-dom';
const  Modal = props => {
    return ReactDom.createPortal(
        <div className='ui dimmer modals visible active'>
           <div className='ui standard modal visible active'>
           <div className='header'>Delete Stream</div>
           <div  className='content'>
           Are you sure you want to delete this stream?
           </div>
           </div>
        </div>, document.querySelector('#modal')
    );
};

export default Modal;
