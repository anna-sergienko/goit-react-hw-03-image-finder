import React, {Component} from 'react';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';



class App extends Component{
state ={
  searchingName: "",
  showModal: false,
  imgBox: {},

}

  handleFormSubmit = searchingName =>{
this.setState({searchingName});
  }

  toggleModal = ()=>{
  
this.setState(prev => ({showModal: !prev.showModal}));
  }


openModal = evt =>{
  this.toggleModal();
  const imgBox ={
    largeImageURL: evt.currentTarget.dataset.url,
    alt: evt.currentTarget.alt,
  }
  this.setState({imgBox})

}

render(){
  const {searchingName, showModal, imgBox} = this.state;
  return(
    <>
  {!showModal &&  <Searchbar onSubmit={this.handleFormSubmit}/>}
    <ImageGallery searchingName={searchingName} openModal={this.openModal}/>
  
  {showModal && 
  <Modal onClose={this.toggleModal}>
    <img  src={imgBox.largeImageURL} alt={imgBox.alt}/>
    </Modal>}
    </>
  )
}
}

export default App;
