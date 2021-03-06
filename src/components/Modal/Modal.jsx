import { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";


const modalRoot = document.querySelector('#modal-root');
console.log(modalRoot);
export default class Modal extends Component{
    componentDidMount(){
window.addEventListener('keydown', this.onKeydown)
    }



    componentWillUnmount(){
window.addEventListener('keydown', this.onKeydown)
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
        <div className="overlay" onClick={this.onBackdrop}>
        <div className="modal">
        {this.props.children}
        </div>
      </div>, modalRoot
       )
   } 
}
