import { Component } from "react";
import { createPortal } from "react-dom";
import {Overlay, ModalWrapper} from  "./Modal.styled.js";


const modalRoot = document.querySelector('#modal-root');


export default class Modal extends Component{

componentDidMount(){
window.addEventListener('keydown', this.onKeydown)
}



componentWillUnmount(){
window.removeEventListener('keydown', this.onKeydown)
    }

onKeydown = evt =>{
    if(evt.code === 'Escape'){
        this.props.onClose();
    }
}


onBackdrop = evt =>{
    if(evt.currentTarget === evt.target){
        this.props.onClose();
    }
}

   render(){
       return createPortal(
        <Overlay onClick={this.onBackdrop}>
        <ModalWrapper>
        {this.props.children}
        </ModalWrapper>
      </Overlay>, modalRoot
       )
   } 
}
