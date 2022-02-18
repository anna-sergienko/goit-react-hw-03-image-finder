// import PropTypes from "prop-types"
import { Component } from "react";

// import "./ImageGallery.css"
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
// import Loader from "../Loader"
// import Button from "../Button";
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
console.log("qwe");
    if ( prevName !== nextName) {
      this.setState({ status: 'pending'})
      console.log("qwe")
      Api.fetchPictures(nextName, 1)
        .then((data) => {
          console.log(data);
          this.setState({
            pictures: data.hits,
            status: 'resolved'
          })
          // if (data.total === 0) {return Promise.reject( new Error(`Error search result, try again`))}
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

  // onLoadMore() {
  //   this.setState((prevState) => ({
  //     page: prevState.page + 1,
  //   }));
  // };

  render() { 
    const { pictures, error, status } = this.state


    if (status === 'idle') {
        return <h1>Enter name</h1>
    }
    
    if (status === 'pending') {
      return <p>Loading..</p>
    }

    if (status === 'rejected') {
      return <h2>{error.message}</h2>
    }

    if (status === 'resolved') {
      return (
      <>
        <ul className="imageGallery_list">
        <ImageGalleryItem pictures={pictures} />
          </ul>
          {/* <Button onLoadMore={() => this.onLoadMore()}/> */}
      </> 
      )
    }
    
     
  }
}
 
export default ImageGallery;

 


