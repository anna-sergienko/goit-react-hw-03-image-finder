import PropTypes from 'prop-types';
import './ImageGalleryItem.css';


export default function ImageGalleryItem ({pictures, openModal}){
    return pictures.map(({id, webformatURL, largeImageURL }) => (
<li className="GalleryItem" key={id}>
  <img className="GalleryItemImage"
  src={webformatURL} 
  alt={`pic ${id}`} 
  data-url={largeImageURL}
  onClick={openModal}
  />
</li>
    ))
}

ImageGalleryItem.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
openModal: PropTypes.func,
};
