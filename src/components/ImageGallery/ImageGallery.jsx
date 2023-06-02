import PropTypes from "prop-types"
import { Component } from "react";
import './ImageGallery.css';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import Api from "../../API/pixabayApi";

class ImageGallery extends Component {
  state = {
    pictures: [],
    page: 1,
    error: null,
    status: 'idle'
  } 

  
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchingName;
    const nextName = this.props.searchingName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if ( prevName !== nextName) {
      this.setState({ status: 'pending'})
   
      Api.fetchPictures(nextName, 1)
        .then((data) => {
          this.setState({
            pictures: data.hits,
            status: 'resolved'
          })
      })
      .catch(error => this.setState({ error, status: 'rejected' }))
    };

    
    if (prevPage !== nextPage) {
      Api.fetchPictures(nextName, nextPage)
      .then((data) => {
        this.setState(
          { pictures: nextPage > 1 ? [...prevState.pictures, ...data.hits] : data.hits })
      })
        .catch(error => this.setState({ error, status: 'rejected' }))
      
    }
  }

  onLoadMore() {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() { 
    const { pictures, error, status } = this.state


    if (status === 'idle') {
        return <h1 className="preTitle">Enter staff you want to find</h1>
    }
    
    if (status === 'pending') {
      return <Loader/>
    }

    if (status === 'rejected') {
      return <h2>{error.message}</h2>
    }

    if (status === 'resolved') {
      return (
      <>
        <ul className="ImageGalleryList">
        <ImageGalleryItem pictures={pictures} openModal={this.props.openModal}/>
        </ul>
        <Button onLoadMore={() => this.onLoadMore()}/>
      </> 
      )
    }
    
     
  }
}
 
export default ImageGallery;

ImageGallery.propTypes = {
openModal: PropTypes.func,
searchingName: PropTypes.string.isRequired,
}


