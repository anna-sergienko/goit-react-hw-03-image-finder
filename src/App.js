import React, {Component} from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';





class App extends Component{
state ={
  searchingName: " ",
//   showModal: false,
//   imgBox: {},

}

  handleFormSubmit = searchingName =>{
this.setState({searchingName});
  }

//   toggleModal = ()=>{
// this.setState({showModal: !this.state.showModal});
//   }




render(){
  const {searchingName} = this.state;
  return(
    <>
  
    <Searchbar onSubmit={this.handleFormSubmit}/>
    <ImageGallery searchingName={searchingName} />
  
    </>
  )
}
}

export default App;
