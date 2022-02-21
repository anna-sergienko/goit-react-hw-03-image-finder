
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

