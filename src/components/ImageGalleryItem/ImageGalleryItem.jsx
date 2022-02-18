// import "./ImageGalleryItem.css";

export default function ImageGalleryItem ({pictures}){
    return pictures.map(({id, webformatURL, largeImageURL }) => (
<li className="ImageGalleryItem" key={id}>
  <img 
  className= "ImageGalleryItem-image" 
  src={webformatURL} 
  alt={`pic ${id}`} 
  data-url={largeImageURL}
  />
</li>
    ))
}

